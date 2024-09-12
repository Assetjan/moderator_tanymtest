import 'dart:developer';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:rxdart/rxdart.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_app_bar.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_text.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_text_field.dart';
import 'package:tanymtest_moderator_app/src/core/constants/app_colors.dart';
import 'package:tanymtest_moderator_app/src/feautures/groups/model/group_model.dart';
import 'package:tanymtest_moderator_app/src/feautures/groups/model/student_model.dart';
import 'package:tanymtest_moderator_app/src/feautures/groups/provider/group_provider.dart';
import 'package:tanymtest_moderator_app/src/feautures/results/model/result_model.dart';
import 'package:tanymtest_moderator_app/src/feautures/results/screens/results_of_students.dart';

class ResultsOfGroups extends StatefulWidget {
  const ResultsOfGroups({super.key});

  @override
  State<ResultsOfGroups> createState() => _ResultsOfGroupsState();
}

class _ResultsOfGroupsState extends State<ResultsOfGroups> {
  late Future<void> _initialization;
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _initialization = _initializeProvider();
  }

  Future<void> _initializeProvider() async {
    final groupProvider = Provider.of<GroupProvider>(context, listen: false);
    await groupProvider.initialize();
  }

  Stream<List<List<ResultModel>>> getResults(List<StudentModel> listStudents) {
    try {
      final _db = FirebaseFirestore.instance;

      // List of streams that each emits List<ResultModel> for each student
      List<Stream<List<ResultModel>>> listOfResultsStreams = [];

      for (var studentData in listStudents) {
        Stream<List<ResultModel>> studentResultsStream = _db
            .collection('users')
            .doc(studentData.uid)
            .collection('result')
            .snapshots()
            .asyncMap((snapshot) async {
          List<ResultModel> results = [];
          for (var doc in snapshot.docs) {
            var resultData = doc.data();

            ResultModel result = ResultModel(
              name_of_test: resultData['name_of_test'],
              data: resultData['data'],
              depression: resultData['depression'],
              neuroticism: resultData['neuroticism'],
              sincerity: resultData['sincerity'],
              sociability: resultData['sociability'],
              list_of_emotions: resultData['list_of_emotions'],
              zone: resultData['zone'],
            );

            results.add(result);
          }
          return results;
        });

        listOfResultsStreams.add(studentResultsStream);
      }
      return CombineLatestStream.list(listOfResultsStreams);
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: CommonAppBar(
          onTap: () {
            Navigator.pop(context);
          },
          title: 'Результаты всех групп',
          icon: const Icon(
            Icons.arrow_back_ios_new_rounded,
            color: AppColors.white_color,
          ),
        ),
        backgroundColor: AppColors.background_color,
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: CommonTextField(
                      icon: const Icon(
                        Icons.search,
                        size: 30,
                      ),
                      keyboardType: TextInputType.text,
                      controller: searchController,
                      hintText: 'Поиск',
                      obscureText: false,
                    ),
                  ),
                  Container(
                    height: 55,
                    width: 55,
                    margin: const EdgeInsets.only(left: 10),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5.0),
                      border: Border.all(
                        color: AppColors.light_grey_color,
                        width: 1.0,
                      ),
                      color: AppColors.white_color,
                    ),
                    child: IconButton(
                      icon: const ImageIcon(
                        AssetImage('assets/icons/filter.png'),
                        size: 30,
                        color: AppColors.primary_color,
                      ),
                      onPressed: () {},
                    ),
                  )
                ],
              ),
              const SizedBox(height: 10),
              Expanded(
                child: FutureBuilder(
                  future: _initialization,
                  builder: (context, snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const Center(
                        child: CircularProgressIndicator(
                          color: AppColors.primary_color,
                        ),
                      );
                    } else if (snapshot.hasError) {
                      return Center(child: Text('Ошибка: ${snapshot.error}'));
                    } else {
                      return Consumer<GroupProvider>(
                        builder: (context, groupProvider, child) {
                          return StreamBuilder<List<GroupModel>>(
                            stream: groupProvider.getGroups(),
                            builder: (context,
                                AsyncSnapshot<List<GroupModel>> snapshot) {
                              if (snapshot.connectionState ==
                                  ConnectionState.waiting) {
                                return const Center(
                                  child: CircularProgressIndicator(
                                    color: AppColors.primary_color,
                                  ),
                                );
                              } else if (snapshot.hasError) {
                                return Center(
                                    child: Text('Ошибка: ${snapshot.error}'));
                              } else if (!snapshot.hasData ||
                                  snapshot.data!.isEmpty) {
                                return const Center(child: Text('Нет данных'));
                              } else {
                                return Builder(builder: (context) {
                                  return ListView.separated(
                                    separatorBuilder: (_, __) {
                                      return const SizedBox(height: 20);
                                    },
                                    itemCount: snapshot.data!.length,
                                    itemBuilder: (context, index) {
                                      GroupModel group = snapshot.data![index];
                                      return StreamBuilder<
                                              List<List<ResultModel>>>(
                                          stream: getResults(group.students),
                                          builder: (context,
                                              AsyncSnapshot<
                                                      List<List<ResultModel>>>
                                                  resultSnapshot) {
                                            int greenZone = 0;
                                            int yellowZone = 0;
                                            int redZone = 0;
                                            int blackZone = 0;

                                            if (resultSnapshot.hasData &&
                                                resultSnapshot
                                                    .data!.isNotEmpty) {
                                              for (var studentResults
                                                  in resultSnapshot.data!) {
                                                if (studentResults.isNotEmpty) {
                                                  var latestResult =
                                                      studentResults.last;
                                                  switch (latestResult.zone) {
                                                    case 'green':
                                                      greenZone++;
                                                      break;
                                                    case 'yellow':
                                                      yellowZone++;
                                                      break;
                                                    case 'red':
                                                      redZone++;
                                                      break;
                                                    case 'black':
                                                      blackZone++;
                                                      break;
                                                  }
                                                }
                                              }
                                            }
                                            int passed = 0;
                                            if (resultSnapshot.hasData &&
                                                resultSnapshot
                                                    .data!.isNotEmpty) {
                                              for (var studentResult
                                                  in resultSnapshot.data!) {
                                                if (studentResult.isNotEmpty) {
                                                  passed++;
                                                }
                                              }
                                            }
                                            double progressValue = 0;

                                            if (group.students.isNotEmpty) {
                                              progressValue = passed /
                                                  group.students.length;
                                            }
                                            return GestureDetector(
                                              onTap: () {
                                                Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                    builder: (context) =>
                                                        ResultsOfStudents(
                                                            group: group),
                                                  ),
                                                );
                                              },
                                              child: Container(
                                                height: 140,
                                                width: double.maxFinite,
                                                decoration: BoxDecoration(
                                                  color: AppColors.white_color,
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          10.0),
                                                ),
                                                alignment: Alignment.topLeft,
                                                child: Padding(
                                                  padding: const EdgeInsets.all(
                                                      20.0),
                                                  child: Column(
                                                    crossAxisAlignment:
                                                        CrossAxisAlignment
                                                            .start,
                                                    mainAxisAlignment:
                                                        MainAxisAlignment
                                                            .spaceBetween,
                                                    children: [
                                                      CommonText(
                                                        text: group.group_name,
                                                        color: AppColors
                                                            .black_color,
                                                        size: 26,
                                                      ),
                                                      SizedBox(
                                                        width: double.maxFinite,
                                                        child:
                                                            LinearProgressIndicator(
                                                          borderRadius:
                                                              BorderRadius
                                                                  .circular(5),
                                                          value: progressValue,
                                                          backgroundColor:
                                                              Colors.grey[300],
                                                          valueColor:
                                                              const AlwaysStoppedAnimation<
                                                                  Color>(
                                                            Colors.green,
                                                          ),
                                                          minHeight: 8,
                                                        ),
                                                      ),
                                                      Row(
                                                        mainAxisAlignment:
                                                            MainAxisAlignment
                                                                .spaceBetween,
                                                        children: [
                                                          SizedBox(
                                                            child: Row(
                                                              children: [
                                                                const CircleAvatar(
                                                                  radius: 7,
                                                                  backgroundColor:
                                                                      AppColors
                                                                          .primary_color,
                                                                ),
                                                                const SizedBox(
                                                                    width: 5),
                                                                CommonText(
                                                                    text:
                                                                        '$greenZone'),
                                                                const SizedBox(
                                                                    width: 10),
                                                                const CircleAvatar(
                                                                  radius: 7,
                                                                  backgroundColor:
                                                                      AppColors
                                                                          .yellow_color,
                                                                ),
                                                                const SizedBox(
                                                                    width: 5),
                                                                CommonText(
                                                                    text:
                                                                        '$yellowZone'),
                                                                const SizedBox(
                                                                    width: 10),
                                                                const CircleAvatar(
                                                                  radius: 7,
                                                                  backgroundColor:
                                                                      AppColors
                                                                          .red_color,
                                                                ),
                                                                const SizedBox(
                                                                    width: 5),
                                                                CommonText(
                                                                    text:
                                                                        '$redZone'),
                                                                const SizedBox(
                                                                    width: 10),
                                                                const CircleAvatar(
                                                                  radius: 7,
                                                                  backgroundColor:
                                                                      Colors
                                                                          .black,
                                                                ),
                                                                const SizedBox(
                                                                    width: 5),
                                                                CommonText(
                                                                    text:
                                                                        '$blackZone'),
                                                              ],
                                                            ),
                                                          ),
                                                          CommonText(
                                                            text:
                                                                'Сдали $passed из ${group.students.length}',
                                                            color: AppColors
                                                                .dark_grey_color,
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  ),
                                                ),
                                              ),
                                            );
                                          });
                                    },
                                  );
                                });
                              }
                            },
                          );
                        },
                      );
                    }
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

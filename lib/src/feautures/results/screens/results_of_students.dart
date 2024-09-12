import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_app_bar.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_text.dart';
import 'package:tanymtest_moderator_app/src/core/common/common_text_field.dart';
import 'package:tanymtest_moderator_app/src/core/constants/app_colors.dart';
import 'package:tanymtest_moderator_app/src/feautures/groups/model/group_model.dart';
import 'package:tanymtest_moderator_app/src/feautures/groups/provider/group_provider.dart';
import 'package:tanymtest_moderator_app/src/feautures/results/model/result_model.dart';
import 'package:tanymtest_moderator_app/src/feautures/results/provider/result_provider.dart';

class ResultsOfStudents extends StatefulWidget {
  final GroupModel group;
  ResultsOfStudents({required this.group, super.key});

  @override
  State<ResultsOfStudents> createState() => _ResultsOfStudentsState();
}

class _ResultsOfStudentsState extends State<ResultsOfStudents> {
  Map<int, bool> expandedStates = {};

  @override
  void initState() {
    super.initState();
    initStudentsLoading();
  }

  Future<void> initStudentsLoading() async {
    try {
      await Provider.of<GroupProvider>(context, listen: false).getStudents(
        widget.group.group_id,
      );
    } catch (e) {
      print("Ошибка при загрузке групп: $e");
    }
  }

  TextEditingController searchController = TextEditingController();

  // Function to map zone to color
  Color getZoneColor(String zone) {
    switch (zone.toLowerCase()) {
      case 'red':
        return AppColors.red_color;
      case 'yellow':
        return AppColors.yellow_color;
      case 'green':
        return AppColors.primary_color;
      case 'black':
        return Colors.black;
      default:
        return Colors.grey;
    }
  }

  // Function to map zone to display text
  String getZoneText(String zone) {
    switch (zone.toLowerCase()) {
      case 'red':
        return 'В красной зоне';
      case 'yellow':
        return 'В жёлтой зоне';
      case 'green':
        return 'В зелёной зоне';
      case 'black':
        return 'В чёрной зоне';
      default:
        return 'Зона неизвестна';
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: CommonAppBar(
          title: ('Результаты ${widget.group.group_name}'),
          icon: const Icon(
            Icons.arrow_back_ios_new_rounded,
            color: AppColors.white_color,
          ),
          onTap: () {
            Navigator.pop(context);
          },
        ),
        backgroundColor: AppColors.background_color,
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
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
                child: Consumer<GroupProvider>(
                  builder: (context, groupProvider, child) {
                    return ListView.separated(
                      separatorBuilder: (_, __) {
                        return const SizedBox(height: 10);
                      },
                      itemCount: widget.group.students.length,
                      itemBuilder: (context, index) {
                        var student = widget.group.students[index];
                        bool isExpanded = expandedStates[index] ?? false;

                        return Column(
                          children: [
                            Container(
                              height: 90,
                              decoration: const BoxDecoration(
                                color: AppColors.white_color,
                                borderRadius: BorderRadius.only(
                                  topLeft: Radius.circular(10),
                                  topRight: Radius.circular(10),
                                ),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        CircleAvatar(
                                          radius: 27,
                                          backgroundImage: NetworkImage(
                                            student.image == ''
                                                ? 'https://samarkand.itcamp.uz/assest/img/reviews/no-pic-ava.jpg'
                                                : student.image,
                                          ),
                                        ),
                                        const SizedBox(width: 15),
                                        FutureBuilder<List<ResultModel>>(
                                          future: Provider.of<ResultProvider>(
                                                  context,
                                                  listen: false)
                                              .getResults(student.uid),
                                          builder: (context, snapshot) {
                                            if (snapshot.hasData &&
                                                snapshot.data!.isNotEmpty) {
                                              String studentZone =
                                                  snapshot.data![0].zone;
                                              return Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: [
                                                  CommonText(
                                                      text: student.name),
                                                  Row(
                                                    children: [
                                                      CircleAvatar(
                                                        radius: 7,
                                                        backgroundColor:
                                                            getZoneColor(
                                                                studentZone),
                                                      ),
                                                      const SizedBox(width: 5),
                                                      CommonText(
                                                        text: getZoneText(
                                                            studentZone),
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              );
                                            } else {
                                              return Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: [
                                                  CommonText(
                                                      text: student.name),
                                                  const Text('Зона неизвестна')
                                                ],
                                              );
                                            }
                                          },
                                        ),
                                      ],
                                    ),
                                    IconButton(
                                      onPressed: () {
                                        setState(() {
                                          expandedStates[index] =
                                              !isExpanded; // Toggle the expanded state
                                        });
                                      },
                                      icon: Icon(
                                        isExpanded
                                            ? Icons.keyboard_arrow_up_rounded
                                            : Icons.keyboard_arrow_down_rounded,
                                        color: AppColors.primary_color,
                                        size: 40,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            if (isExpanded)
                              FutureBuilder<List<ResultModel>>(
                                future: Provider.of<ResultProvider>(context,
                                        listen: false)
                                    .getResults(student.uid),
                                builder: (context, snapshot) {
                                  if (snapshot.connectionState ==
                                      ConnectionState.waiting) {
                                    return const CircularProgressIndicator(
                                        color: AppColors.primary_color);
                                  }
                                  if (snapshot.hasError) {
                                    return Text("Error: ${snapshot.error}");
                                  }
                                  if (snapshot.hasData &&
                                      snapshot.data!.isNotEmpty) {
                                    final results = snapshot.data!;
                                    return Container(
                                      height: 200,
                                      width: double.maxFinite,
                                      padding: const EdgeInsets.all(10.0),
                                      decoration: const BoxDecoration(
                                        color: AppColors.white_color,
                                        borderRadius: BorderRadius.only(
                                          bottomRight: Radius.circular(10),
                                          bottomLeft: Radius.circular(10),
                                        ),
                                      ),
                                      child: ListView.builder(
                                        itemCount: results.length,
                                        itemBuilder: (context, index) {
                                          return Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              CommonText(
                                                text:
                                                    'Сдано: ${results[index].data}',
                                                size: 20,
                                              ),
                                              const SizedBox(height: 10),
                                              Table(
                                                border: TableBorder.all(
                                                    color: Colors.grey),
                                                columnWidths: const <int,
                                                    TableColumnWidth>{
                                                  0: FlexColumnWidth(),
                                                  1: FixedColumnWidth(150),
                                                },
                                                defaultVerticalAlignment:
                                                    TableCellVerticalAlignment
                                                        .middle,
                                                children: <TableRow>[
                                                  TableRow(
                                                    children: <Widget>[
                                                      Container(
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: const Text(
                                                          'Искренность',
                                                          style: TextStyle(
                                                              fontSize: 16),
                                                        ),
                                                      ),
                                                      Container(
                                                        color: AppColors
                                                            .white_color,
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: Text(
                                                          results[index]
                                                              .sincerity
                                                              .toString(),
                                                          style: const TextStyle(
                                                              fontSize: 16,
                                                              color: Colors
                                                                  .blueAccent),
                                                          textAlign:
                                                              TextAlign.center,
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  TableRow(
                                                    children: <Widget>[
                                                      Container(
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: const Text(
                                                          'Невротизм',
                                                          style: TextStyle(
                                                              fontSize: 16),
                                                        ),
                                                      ),
                                                      Container(
                                                        color: AppColors
                                                            .white_color,
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: Text(
                                                          results[index]
                                                              .neuroticism
                                                              .toString(),
                                                          style: const TextStyle(
                                                              fontSize: 16,
                                                              color: Colors
                                                                  .blueAccent),
                                                          textAlign:
                                                              TextAlign.center,
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  TableRow(
                                                    children: <Widget>[
                                                      Container(
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: const Text(
                                                          'Депрессия',
                                                          style: TextStyle(
                                                              fontSize: 16),
                                                        ),
                                                      ),
                                                      Container(
                                                        color: AppColors
                                                            .white_color,
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: Text(
                                                          results[index]
                                                              .depression
                                                              .toString(),
                                                          style: const TextStyle(
                                                              fontSize: 16,
                                                              color: Colors
                                                                  .blueAccent),
                                                          textAlign:
                                                              TextAlign.center,
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  TableRow(
                                                    children: <Widget>[
                                                      Container(
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: const Text(
                                                          'Общительность',
                                                          style: TextStyle(
                                                              fontSize: 16),
                                                        ),
                                                      ),
                                                      Container(
                                                        color: AppColors
                                                            .white_color,
                                                        padding:
                                                            const EdgeInsets
                                                                .all(8),
                                                        child: Text(
                                                          results[index]
                                                              .sociability
                                                              .toString(),
                                                          style: const TextStyle(
                                                              fontSize: 16,
                                                              color: Colors
                                                                  .blueAccent),
                                                          textAlign:
                                                              TextAlign.center,
                                                        ),
                                                      ),
                                                    ],
                                                  )
                                                ],
                                              ),
                                              const SizedBox(height: 10),
                                            ],
                                          );
                                        },
                                      ),
                                    );
                                  } else {
                                    return Container(
                                      color: AppColors.white_color,
                                      height: 100,
                                      width: double.maxFinite,
                                      alignment: Alignment.center,
                                      child: const Text("Ничего не найдено"),
                                    );
                                  }
                                },
                              ),
                          ],
                        );
                      },
                    );
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

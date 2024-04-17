import 'package:flutter/material.dart';
import 'package:worldpreset/widgets/appbar.dart';

class Settingspage extends StatefulWidget {
  const Settingspage({super.key, required this.title});

  final String title;

  @override
  State<Settingspage> createState() => _SettingspageState();
}

class _SettingspageState extends State<Settingspage> {
  @override
  Widget build(BuildContext context) {
    return WorldPresetAppbar(
      title: widget.title,
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[],
        ),
      ),
    );
  }
}

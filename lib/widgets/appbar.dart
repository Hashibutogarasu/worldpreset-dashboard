import 'package:flutter/material.dart';

class WorldPresetAppbar extends StatefulWidget {
  const WorldPresetAppbar({super.key, required this.title, required this.body});
  final String title;
  final Widget body;

  @override
  State<StatefulWidget> createState() => _WorldPresetAppbar();
}

class _WorldPresetAppbar extends State<WorldPresetAppbar> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      drawer: Drawer(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                shrinkWrap: true,
                children: const [
                  ListTile(title: Text("ホーム"), leading: Icon(Icons.home)),
                  ListTile(title: Text("連携")),
                ],
              ),
            ),
            Expanded(child: Container()),
            const Divider(),
            const ListTile(
              title: Text("アカウント"),
              leading: Icon(Icons.account_circle),
            ),
            const ListTile(title: Text("設定"), leading: Icon(Icons.settings)),
          ],
        ),
      ),
      body: widget.body,
    );
  }
}

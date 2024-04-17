import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:worldpreset/main.dart';

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
                child: ListView.builder(
              itemCount: router.configuration.routes.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(routermodels[index].name),
                  onTap: () {
                    context.go(routermodels[index].path);
                  },
                );
              },
            ))
          ],
        ),
      ),
      body: widget.body,
    );
  }
}

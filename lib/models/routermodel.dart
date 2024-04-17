import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RouterModel {
  RouterModel({required this.name, required this.path, required this.builder});
  String name;
  String path;
  Widget Function(BuildContext, GoRouterState)? builder;
}

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:go_router/go_router.dart';
import 'package:worldpreset/models/routermodel.dart';
import 'package:worldpreset/pages/home/homepage.dart';
import 'package:worldpreset/pages/login/loginpage.dart';
import 'package:worldpreset/pages/settings/settingspage.dart';
import 'package:worldpreset/widgets/appbar.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}

final routermodels = [
  RouterModel(
    name: "init",
    path: "/",
    builder: (context, state) => const HomePage(title: "ホーム"),
  ),
  RouterModel(
    name: "home",
    path: "/home",
    builder: (context, state) => const HomePage(title: "ホーム"),
  ),
  RouterModel(
    name: "login",
    path: "/login",
    builder: (context, state) => const LoginPage(title: "ログイン"),
  ),
  RouterModel(
    name: "settings",
    path: "/settings",
    builder: (context, state) => const Settingspage(title: "設定"),
  )
];

final router =
    GoRouter(debugLogDiagnostics: true, initialLocation: '/', routes: [
  ...routermodels.map(
    (e) => GoRoute(
      name: e.name,
      path: e.path,
      builder: e.builder,
    ),
  ),
]);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'ホーム',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      routerDelegate: router.routerDelegate,
      routeInformationParser: router.routeInformationParser,
      routeInformationProvider: router.routeInformationProvider,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return WorldPresetAppbar(
      title: "ホーム",
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[],
        ),
      ),
    );
  }
}

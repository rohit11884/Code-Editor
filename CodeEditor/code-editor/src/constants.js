export const LANGUAGE_VERSIONS = {
    c: "10.2.0",
    cpp: "10.2.0",
    java: "15.0.2",
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    csharp: "6.12.0",
    php: "8.2.3",
}

export const CODE_SNIPPETS = {
    c: "\n#include <stdio.h>\n\nint main() {\n\tprintf(\"Hello Coder in C\\n\");\n\treturn 0;\n}\n",
    cpp: "\n#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << \"Hello Coder in C++\" << endl;\n\treturn 0;\n}\n",
    java: "\npublic class Coder {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello Coder\");\n\t}\n}\n",
    javascript: "\nfunction greet(name) {\n\tconsole.log(\"Hello, \" + name + \"!\");\n}\n\ngreet(\"Coder\");\n",
    typescript: "\ntype Params = {\n\tname: string;\n}\nfunction greet(data: Params) {\n\tconsole.log(\"Hello, \" + data.name + \"!\");\n}\n\ngreet({ name: \"Coder\" });\n",
    python: "\ndef greet(name):\n\tprint(\"Hello, \" + name + \"!\")\n\ngreet(\"Coder\")\n",
    csharp: "\nusing System;\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine(\"Hello Coder in C#\");\n\t\t}\n\t}\n}\n",
    php: "<?php\n$name = 'Coder';\necho $name;\n",
};

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-dart';
import 'prismjs/themes/prism-tomorrow.css'; // VS Code like dark theme

const flutterCodeLines = [
  'import \'package:flutter/material.dart\';',
  '',
  'void main() {',
  '  runApp(MyApp());',
  '}',
  '',
  'class MyApp extends StatelessWidget {',
  '  @override',
  '  Widget build(BuildContext context) {',
  '    return MaterialApp(',
  '      home: Scaffold(',
  '        appBar: AppBar(title: Text(\'Flutter Demo\')),',
  '        body: Center(child: Text(\'Creating apps that can run on multiple platforms using frameworks like React Native or Flutter. !\')),',
  '      ),',
  '    );',
  '  }',
  '}',
];

const reactCodeLines = [
  'import React from \'react\';',
  '',
  'function App() {',
  '  return (',
  '    <div>',
  '      <h1>LLTTech Solutions!</h1>',
  '      <span>Building custom web applications for various purposes, such as CRM systems, social networking platforms, or data visualization tools. !</span>',
  '    </div>',
  '  );',
  '}',
  '',
  'export default App;',
];

const typingDelay = 100; // ms delay between each character

const CodeTypingDevTool = ({ type = 'react' }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const codeRef = useRef(null);

  const sampleCodeLines = type === 'flutter' ? flutterCodeLines : reactCodeLines;

  useEffect(() => {
    if (currentLineIndex < sampleCodeLines.length) {
      if (currentCharIndex < sampleCodeLines[currentLineIndex].length) {
        const timeout = setTimeout(() => {
          const newLine = (displayedLines[currentLineIndex] || '') + sampleCodeLines[currentLineIndex][currentCharIndex];
          const newDisplayedLines = [...displayedLines];
          newDisplayedLines[currentLineIndex] = newLine;
          setDisplayedLines(newDisplayedLines);
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingDelay);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentCharIndex, currentLineIndex, displayedLines, sampleCodeLines]);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, [displayedLines]);

  return (
    <motion.pre
      ref={codeRef}
      className={`language-${type === 'flutter' ? 'dart' : 'javascript'} bg-gray-900 font-mono rounded-lg shadow-lg p-6 mb-8 overflow-auto`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '450px', whiteSpace: 'pre-wrap', fontSize: '1rem', color: '#ccc' }}
dangerouslySetInnerHTML={{ __html: displayedLines.map(line => Prism.highlight(line || '', Prism.languages[type === 'flutter' ? 'dart' : 'javascript'], type === 'flutter' ? 'dart' : 'javascript')).join('\n') + (currentLineIndex < sampleCodeLines.length ? '<span class="blinking-cursor">|</span>' : '') }}
    >
    </motion.pre>
  );
};

export default CodeTypingDevTool;

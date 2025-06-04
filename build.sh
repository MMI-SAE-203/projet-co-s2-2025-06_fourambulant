#!/bin/bash

# Active les fichiers de version comme .nvmrc
mise settings add idiomatic_version_file_enable_tools node

# Installe les dépendances
npm install

# Lance la build Astro
npm run build

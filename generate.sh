#!/bin/bash

# Check if a module name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <module-name>"
  exit 1
fi

MODULE_NAME=$1
MODULE_PATH="modules/$MODULE_NAME"

echo "Generating NestJS files for module: $MODULE_NAME"

# Create the module directory inside src/modules
mkdir -p $MODULE_PATH

# Generate the module, controller, and service without .spec files
nest g mo $MODULE_PATH &&
nest g co $MODULE_PATH --no-spec &&
nest g s $MODULE_PATH --no-spec &&

# Create folders for DTO and Entities inside the module folder
mkdir -p $MODULE_PATH/dto $MODULE_PATH/entities &&

# Generate DTO and Entity files inside the correct folders
nest g class $MODULE_PATH/dto/${MODULE_NAME}.dto &&
nest g class $MODULE_PATH/entities/${MODULE_NAME}.entity

# Remove .spec.ts files from DTO and Entity folders
rm -f $MODULE_PATH/dto/*.spec.ts
rm -f $MODULE_PATH/entities/*.spec.ts

echo "✅ Module $MODULE_NAME generated successfully in $MODULE_PATH, and .spec.ts files removed!"

# Singleton pattern

## What is it?
* Limits the instantiation of an object to a single instance
* Helps coordinate data and functions across the application
* Can help to reduce unnecessary memory usage

## why not use singletons?
* May introduce unnecessary restrictions
* Singletons are available anywhere in the application by anything, which may mean that dependencies may not be immediately visible, meaning developers may need to know the inner workings of the singleton
* May be difficult to test

## Requirements
* Ensure that only one instance of the singleton exists
* Provide global access to the instance

## Examples
* Logging function - Don't want a new instance of the logger for every log
* Global config - Config should come from a single source of truth
* Database connections - Many instances can increase memory usage

## Video structure
1. Simple example
2. Database connection example with a class
3. Database connection example with a function
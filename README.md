## Dependencies

- Ruby 1.9.3
- Appium
- Titanium

## Getting started

0. You will need Ruby 1.9.3, although an older version might work as well.
1. `$ gem install bundler`
2. Install Titanium
3. Install Appium
4. Install the ruby gems `bundle install`

## Running the tests

Start appium (or fire up Appium.app)

```
$ appium
```

Create a new build and run the specs:

```
$ titanium build --platform ios --build-only && rspec .
```

Be amazed and check the test: `spec/crud_spec.rb`.

Then check `app/alloy.js` and notice that the database is deleted each time when the
app is started. This is obviously a temporary hack, until I find a proper way to
accomplish the same effect. Worst case an environment variable will be used as a
check.

## Notice

Appium is awesome. For this simple example I'm using Ruby, but you can write
your tests in Python, JavaScript, Ruby, Java etc. It depends only on a proper selenium driver.
Cool, eh?

## Legal

### Alloy

Alloy is developed by Appcelerator and the community and is Copyright (c) 2012
by Appcelerator, Inc. All Rights Reserved. Alloy is made available under the
Apache Public License, version 2. See the LICENSE file for more information.

### Appium

Copyright 2012-2013 Appium Committers

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

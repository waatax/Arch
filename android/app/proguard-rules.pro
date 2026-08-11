# This app intentionally exposes no JavaScript bridge. AndroidX publishes the
# consumer rules it needs, so the release build can use full R8 optimization
# without broad keep rules that retain unused code.

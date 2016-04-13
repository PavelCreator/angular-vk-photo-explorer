function print_r(arr, level) {
  var print_red_text = "";
  if (!level) level = 0;
  var level_padding = "";
  for (var j = 0; j < level + 1; j++) level_padding += "    ";
  if (typeof(arr) == 'object') {
    for (var item in arr) {
      var value = arr[item];
      if (typeof(value) == 'object') {
        print_red_text += level_padding + "'" + item + "' :\n";
        print_red_text += print_r(value, level + 1);
      }
      else
        print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
    }
  }
  else  print_red_text = "===>" + arr + "<===(" + typeof(arr) + ")";
  return print_red_text;
}

function print_r(arr, level) {
  var print_red_text = "";
  if (!level) level = 0;
  var level_padding = "";
  for (var j = 0; j < level + 1; j++) level_padding += "    ";
  if (typeof(arr) == 'object') {
    for (var item in arr) {
      var value = arr[item];
      if (typeof(value) == 'object') {
        print_red_text += level_padding + "'" + item + "' :\n";
        print_red_text += print_r(value, level + 1);
      }
      else
        print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
    }
  }
  else  print_red_text = "===>" + arr + "<===(" + typeof(arr) + ")";
  return print_red_text;
}

function countOfOject(obj) {
  var t = typeof(obj);
  var i = 0;
  if (t != "object" || obj == null) return 0;
  for (let x in obj) i++;
  return i;
}

function copy(dst) {
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    for (var key in arg) {
      dst[key] = arg[key];
    }
  }
  return dst;
}

var classFnc = {
  add: function (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
  },
  remove: function (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
  }
};
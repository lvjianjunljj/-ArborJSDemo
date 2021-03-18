(function () {

  //
  // the parameter-setting ui at the top of the screen
  //
  Dashboard = function (elt, sys) {
    var dataFactoryGraphStrs = new Map()
    var dom = $(elt)
    var parse = Parseur().parse
    var _ordinalize_re = /(\d)(?=(\d\d\d)+(?!\d))/g
    var ordinalize = function (num, hint) {
      var norm = "" + num
      if (hint == "friction") {
        norm = Math.floor(100 * num) + "%"
      } else {
        num = Math.round(num)
        if (num < 11000) {
          norm = ("" + num).replace(_ordinalize_re, "$1,")
        } else if (num < 1000000) {
          norm = Math.floor(num / 1000) + "k"
        } else if (num < 1000000000) {
          norm = ("" + Math.floor(num / 1000)).replace(_ordinalize_re, "$1,") + "m"
        }
      }
      return norm
    }

    var _ranges = {
      stiffness: [0, 15000],
      repulsion: [0, 100000],
      friction: [0, 1]
    }
    var _state = null

    var that = {
      helpPanel: HelpPanel($('#rtfm')),
      init: function () {
        // initialize the display with params from the particle system
        that.update()

        // click + drag on param values to modify them
        dom.find('.frob').mousedown(that.beginFrobbing)
        dom.find('img').mousedown(function () { return false })
        dom.find('.toggle').click(that.toggleGravity)
        // dom.find('.update').click(that.updateGraph)
        dom.find('.datFactory').change(that.updateDataFactory)

        $('.help').click(that.showHelp)
        dom.find('.about').click(that.showIntro)
        $("#intro h1 a").click(that.hideIntro)

        $(that.helpPanel).bind('closed', that.hideHelp)
        return that
      },

      update: function () {
        $.each(sys.parameters(), function (param, val) {
          if (param == 'gravity') {
            dom.find('.gravity .toggle').text(val ? "Center" : "Off")
          } else {
            dom.find('li.' + param).find('.frob')
              .text(ordinalize(val, param))
              .data("param", param)
              .data("val", val)
          }

        })
      },

      showHelp: function (e) {
        that.helpPanel.reveal()
        dom.find('.help').fadeOut()
        // trace('help')
        return false
      },

      hideHelp: function (e) {
        trace('closed')
        dom.find('.help').fadeIn()
      },

      showIntro: function (e) {
        var intro = $("#intro")
        if (intro.css('display') == 'block') return false

        intro.stop(true).css('opacity', 0).show().fadeTo('fast', 1)
        dom.find('.about').removeClass('active')
        return false
      },

      hideIntro: function (e) {
        var intro = $("#intro")
        if (intro.css('opacity') < 1) return false

        dom.find('.about').addClass('active')
        intro.stop(true).fadeTo('fast', 0, function () {
          intro.hide()
        })
        return false
      },

      toggleGravity: function (e) {
        var oldGravity = sys.parameters().gravity
        sys.parameters({ gravity: !oldGravity })
        that.update()
      },

      updateDataFactory: function (e) {
        var dataFactoryName = e.target[e.target.selectedIndex].value
        if (!data.has(dataFactoryName)){
          data.set(dataFactoryName,"; some example nodes\n" +
          "hello {color:red, label:HELLO}\n" +
          "world {color:orange}\n\n" +
          "; some edges\n" +
          "hello -> world {color:yellow}\n" +
          "foo -> bar {weight:5}\n" +
          "bar -> baz {weight:2}\n")
        }

        lorem = `
          ; choices
          2 -> 6 {weight:2}
          2 -> 4 {color:yellow}
          3 -> 9
          3 -> 14
          4 -> 3
          4 -> 8
          6 -> 7
          7 -> 10
          7 -> 12
          8 -> 18
          8 -> 13
          9 -> 25
          9 -> 21
          10 -> 17
          10 -> 19
          12 -> 20
          12 -> 22
          13 -> 24
          13 -> 27
          14 -> 23
          14 -> 26
          17 -> 31
          17 -> 32
          18 -> 28
          18 -> 30
          19 -> 34
          19 -> 36
          21 -> 38
          21 -> 33
          25 -> 6
          26 -> 40
          26 -> 39
          27 -> 42
          27 -> 43
          28 -> 29
          29 -> 44
          29 -> 45
          32 -> 47
          32 -> 48
          33 -> 51
          33 -> 53
          34 -> 50
          34 -> 49
          38 -> 54
          38 -> 52
          40 -> 55
          40 -> 56
          42 -> 57
          42 -> 58
          43 -> 6
          44 -> 59
          44 -> 60
          45 -> 64
          45 -> 62
          47 -> 63
          47 -> 66
          48 -> 50
          50 -> 8
          51 -> 67
          51 -> 68
          52 -> 74
          52 -> 75
          53 -> 69
          53 -> 70
          54 -> 71
          54 -> 72
          55 -> 76
          55 -> 77
          56 -> 78
          56 -> 79
          59 -> 80
          59 -> 82
          60 -> 81
          60 -> 84
          63 -> 87
          63 -> 88
          64 -> 62
          64 -> 83
          64 -> 86
          66 -> 31
          67 -> 6
          69 -> 96
          69 -> 97
          70 -> 98
          70 -> 99
          71 -> 90
          71 -> 89
          74 -> 92
          74 -> 93
          75 -> 106
          79 -> 51
          81 -> 116
          81 -> 117
          82 -> 112
          82 -> 114
          87 -> 94
          87 -> 95
          89 -> 101
          89 -> 103
          90 -> 100
          90 -> 102
          93 -> 104
          93 -> 105
          95 -> 111
          95 -> 110
          99 -> 54

          ; endings
          2 {color:#444, shape:dot, label:·}
          20 {color:#c6531e, label:1231231231231}
          22 {color:#b01700}
          23 {color:#b01700}
          24 {color:#b01700}
          30 {color:#db8e3c}
          31 {color:#c6531e}
          36 {color:#b01700}
          39 {color:#db8e3c}
          49 {color:#db8e3c}
          57 {color:#ffe35f}
          58 {color:#db8e3c}
          62 {color:#b01700}
          68 {color:#c6531e}
          72 {color:#c6531e}
          76 {color:#ffe35f}
          77 {color:#c6531e}
          78 {color:#ffe35f}
          80 {color:#95cde5}
          83 {color:#ffe35f}
          84 {color:#95cde5}
          86 {color:#db8e3c}
          88 {color:#c6531e}
          92 {color:#b01700}
          94 {color:#b01700}
          96 {color:#ffe35f}
          97 {color:#b01700}
          98 {color:#ffe35f}
          100 {color:#db8e3c}
          101 {color:#db8e3c}
          102 {color:#95cde5}
          103 {color:#95cde5}
          104 {color:#ffe35f}
          105 {color:#b01700}
          106 {color:#ffe35f}
          110 {color:#ffe35f}
          111 {color:#ffe35f}
          112 {color:#95cde5}
          114 {color:#ffe35f}
          116 {color:#b01700}
          117 {color:#95cde5}
        `
        var lorem = dataFactoryGraphStrs[dataFactoryName]
        // var src_txt = _code.val()
        // _code.val("1234").focus()
        var network = parse(lorem)
        $.each(network.nodes, function (nname, ndata) {
          if (ndata.label === undefined) ndata.label = nname
        })
        sys.merge(network)
        _updateTimeout = null
      },

      beginFrobbing: function (e) {
        var frob = $(e.target)
        var param = frob.data('param')
        var val = frob.data('val')
        var max = _ranges[param][1]
        var prop = (param == 'friction') ? val / max : (Math.log(val / max) / Math.PI + Math.PI) / Math.PI

        if (val / max > ((param == 'friction') ? .9 : .333)) frob.addClass('huge')
        if (val / max <= ((param == 'friction') ? .4 : .05)) frob.addClass('tiny')

        _state = {
          origin: e.pageX,
          elt: frob,
          param: param,
          val: val,
          prop: prop,
          max: max
        }
        $('html').addClass('adjusting')
        frob.addClass('adjusting')

        $(window).bind('mousemove', that.stillFrobbing)
        $(window).bind('mouseup', that.doneFrobbing)

        return false
      },
      stillFrobbing: function (e) {
        if (!_state) return false

        // slide over the param space with a nice exponential step size
        var disp = _state.prop + (e.pageX - _state.origin) / 1000
        if (_state.param == 'friction') {
          var new_prop = Math.max(0, Math.min(1, disp))
        } else {
          var new_prop = Math.exp(Math.PI * (Math.PI * (disp) - Math.PI))
          new_prop = Math.max(0, Math.min(1, new_prop))
        }
        var new_val = _state.max * new_prop
        if (new_prop % 1 == 0) {
          _state.origin = e.pageX
          _state.prop = new_prop
        }

        if (new_prop > ((_state.param == 'friction') ? .9 : .333)) _state.elt.addClass('huge')
        else _state.elt.removeClass('huge')

        if (new_prop <= ((_state.param == 'friction') ? .4 : .05)) _state.elt.addClass('tiny')
        else _state.elt.removeClass('tiny')

        // update the display
        _state.elt.text(ordinalize(new_val, _state.param))
          .data('val', new_val)

        // let the particle system know about the change
        var new_param = {}
        new_param[_state.param] = new_val
        sys.parameters(new_param)

        return false
      },
      doneFrobbing: function (e) {
        $(window).unbind('mousemove', that.stillFrobbing)
        $(window).unbind('mouseup', that.doneFrobbing)

        $('html').removeClass('adjusting')
        _state.elt.removeClass('adjusting')
        _state.elt.removeClass('huge')
        _state.elt.removeClass('tiny')
        _state = null
        return false
      }
    }

    return that.init()
  }


})()
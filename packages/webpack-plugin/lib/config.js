module.exports = {
  wx: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.wxml',
      styles: '.wxss'
    },
    tabBar: {
      itemKey: 'list',
      iconKey: 'iconPath',
      activeIconKey: 'selectedIconPath'
    },
    stringify: JSON.stringify,
    wxs: {
      tag: 'wxs',
      module: 'module',
      src: 'src',
      ext: '.wxs',
      templatePrefix: 'module.exports = \n'
    },
    directive: {
      if: 'wx:if',
      elseif: 'wx:elif',
      else: 'wx:else',
      event: {
        reg: /^(?:bind|catch):?(.*)$/,
        getType (match) {
          return match[1]
        },
        getBind (eventName) {
          return 'bind' + eventName
        },
        shallowStringify (obj) {
          let arr = []
          for (let key in obj) {
            let value = obj[key]
            if (Array.isArray(value)) {
              value = `[${value.join(',')}]`
            }
            arr.push(`${key}:${value}`)
          }
          return ` {${arr.join(',')}} `
        }
      },
      model: {
        reg: /^wx:model$|wx:model\.(.*)/,
        props: {
          modelProp: {
            name: 'wx:model-prop',
            default: 'value'
          },
          modelEvent: {
            name: 'wx:model-event',
            default: 'input'
          },
          modelValuePath: {
            name: 'wx:model-value-path',
            default: 'value'
          }
        }
      },
      for: 'wx:for',
      forIndex: 'wx:for-index',
      forItem: 'wx:for-item',
      key: 'wx:key',
      dynamicClass: 'wx:class',
      dynamicStyle: 'wx:style',
      ref: 'wx:ref'
    }
  },
  ali: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.axml',
      styles: '.acss'
    },
    tabBar: {
      itemKey: 'items',
      iconKey: 'icon',
      activeIconKey: 'activeIcon'
    },
    optionMenu: {
      iconKey: 'icon'
    },
    stringify: JSON.stringify,
    wxs: {
      tag: 'import-sjs',
      module: 'name',
      src: 'from',
      ext: '.sjs',
      templatePrefix: 'export default \n'
    },
    directive: {
      if: 'a:if',
      elseif: 'a:elif',
      else: 'a:else',
      event: {
        reg: /^(?:on|catch)([A-Z].*)$/,
        getType (match) {
          return match[1].replace(/^./, function (match) {
            return match.toLowerCase()
          })
        },
        getBind (eventName) {
          return 'on' + eventName.replace(/^./, (matched) => {
            return matched.toUpperCase()
          })
        },
        shallowStringify (obj) {
          let arr = []
          for (let key in obj) {
            let value = obj[key]
            if (Array.isArray(value)) {
              value = `[${value.join(',')}]`
            }
            arr.push(`${key}:${value}`)
          }
          return ` {${arr.join(',')}} `
        }
      },
      model: {
        reg: /^a:model$|a:model\.(.*)/,
        props: {
          modelProp: {
            name: 'a:model-prop',
            default: 'value'
          },
          modelEvent: {
            name: 'a:model-event',
            default: 'input'
          },
          modelValuePath: {
            name: 'a:model-value-path',
            default: 'value'
          }
        }
      },
      for: 'a:for',
      forIndex: 'a:for-index',
      forItem: 'a:for-item',
      key: 'a:key',
      dynamicClass: 'a:class',
      dynamicStyle: 'a:style',
      ref: 'a:ref'
    }
  },
  swan: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.swan',
      styles: '.css'
    },
    tabBar: {
      itemKey: 'list',
      iconKey: 'iconPath',
      activeIconKey: 'selectedIconPath'
    },
    stringify: JSON.stringify,
    wxs: {
      tag: 'filter',
      module: 'module',
      src: 'src',
      ext: '.filter.js',
      templatePrefix: 'var __swan_exports__ = \n'
    },
    directive: {
      if: 's-if',
      elseif: 's-elif',
      else: 's-else',
      event: {
        reg: /^bind(.*)$/,
        getType (match) {
          return match[1]
        },
        getBind (eventName) {
          return 'bind' + eventName
        },
        shallowStringify (obj) {
          let arr = []
          for (let key in obj) {
            let value = obj[key]
            if (Array.isArray(value)) {
              value = `[${value.join(',')}]`
            }
            arr.push(`${key}:${value}`)
          }
          return ` {${arr.join(',')}} `
        }
      },
      model: {
        reg: /^s-model$|s-model\.(.*)/,
        props: {
          modelProp: {
            name: 's-model-prop',
            default: 'value'
          },
          modelEvent: {
            name: 's-model-event',
            default: 'input'
          },
          modelValuePath: {
            name: 's-model-value-path',
            default: 'value'
          }
        }
      },
      for: 's-for',
      forIndex: 's-for-index',
      forItem: 's-for-item',
      key: 's-key',
      dynamicClass: 's-class',
      dynamicStyle: 's-style',
      ref: 's-ref'
    }
  }
}

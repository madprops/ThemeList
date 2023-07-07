![](https://i.imgur.com/bN2NSJv.jpg)

## How can I get a random theme?

## How can I get two contrasting colors?

This is a list of themes.

Each item contains a background and 5 colors that should go well with it.

There's a function to get a random background and one of its 5 colors.

So you can quickly make random simple themes (background color and text color).

I haven't tested all the theme combinations so I can't assure they all look good.

```js
const ThemeList = ....

// Get a random background + color combo
let theme = ThemeList.random_theme()
console.log(theme.background)
console.log(theme.color)

// Or get a full item
let theme = ThemeList.random_item()
console.log(theme.background)
console.log(theme.color_1)
console.log(theme.color_2)
console.log(theme.color_3)
console.log(theme.color_4)
console.log(theme.color_5)

// Or use ThemeList.list directly
ThemeList.list[i]
```

With `random_theme()` there's a chance the background and color get swapped, for even more theme possibilities.

If you want to avoid this, use `random_theme(false)`.
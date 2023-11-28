
# CSS Grid Examples and Theory

CSS Grid Layout is a powerful tool for creating complex and responsive layouts in web development. It provides a two-dimensional grid-based layout system that allows you to create flexible and intricate designs. Here, we'll explore some common CSS Grid properties with examples.

## 1. Basic Grid Structure

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

This creates a basic grid with three columns and a gap of 20 pixels between them.

## 2. Grid Item Placement

```css
.item1 {
  grid-column: 1 / 3;
}

.item2 {
  grid-row: 2;
}
```

This example demonstrates how to place specific items in the grid by defining their column and row positions.

## 3. Responsive Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

This creates a responsive grid where columns adapt based on the available space, with a minimum column width of 150 pixels.

## 4. Grid Lines and Areas

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
  grid-template-areas:
    "header header header"
    "main main sidebar";
}
```

Defines grid areas and places items within those areas using the `grid-area` property.

## 5. Grid Alignment

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: space-around;
}
```

This example aligns grid items both vertically and horizontally using `align-items` and `justify-content`.
## 1, Khởi tạo project:

```bash
expo init my-app
```

- Xoá file App.js
- Copy file trong folder template paste vào folder đã tạo

```bash
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native @react-navigation/stack @react-navigation/native-stack
```
## 2, UI là gì? Cú pháp import và sử dụng các component để render ra UI

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CloneMe = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HELLO WORLD</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        color: 'black',
        fontSize: 15,
    }
})

export default CloneMe;
```

### 3, Basic Component:
Là các component có sẵn từ thư viện 'react-native':
View, Text, Image, Pressable, ...

Docs component: https://reactnative.dev/docs/components-and-apis

### 4, Basic styles:
Các thuộc tính của StyleSheet để style cho component:
- Docs view style: https://reactnative.dev/docs/view-style-props
- Docs text style: https://reactnative.dev/docs/text-style-props

* padding: khoảng cách đến các view bên trong
```javascript
{
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
}
```

* margin: khoảng cách đến các view bên ngoài 

```javascript
{
    margin: 10,
    marginTop: 10,
    ...
}
```

* backgroundColor: Màu nền của view

```javascript
{
    backgroundColor: 'white',
    backgroundColor: 'rgba(200,200,200,0.8)',
    backgroundColor: '#a34ff9',
    ...
}
```

* border: viền của view

```javascript
{
    borderWidth: 1,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8, // bo góc
    ...
}
```

* font: Điều chỉnh font chữ

```javascript
{
    fontSize: 14,
    fontWeight: '600',
    ...
}
```

* shadow: Đổ bóng

```javascript
{
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowRadius: 4,
    elevation: 2, // android only
    ...
}
```

## 5, Flexbox:

- Docs: https://reactnative.dev/docs/flexbox

```javascript
{
    flex: 1,
    flexDirection: 'row', // column
    alignItems: 'center', // flex-end, ...
    justifyContent: 'center', // space-between, space-around ...
}
```


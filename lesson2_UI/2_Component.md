## 1, Custom Component là gì, tại sao phải chia nhỏ Component:
Các UI mang 1 tính năng nhỏ, mang tính chất lặp lại / dùng đi dùng lại ở nhiều vị trí.
Các cụm UI mang vai trò cụ thể, chia nhỏ để dễ quản lý code.

## 2, Design thinking:
Tư duy khi nhìn design để chia cấu trúc component.
Từ ngoài vào trong 
Từ trên xuống dưới
Từ trái sang phải

## 3, Props of component:


```javascript
    <Text numberOfLines={1} style={styles.title}>HELLO WORLD</Text>
```

```javascript
    <Pressable onPress={() => alert('x')}>
        <Text>Button</Text>
    </Pressable>
```

```javascript
<BalanceView title="Total" amount={50000} />

const BalanceView = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.balance}>{props.amount}</Text>
        </View>
    )
}

```
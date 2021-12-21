## 1, React useState:
- State là gì
- Cú pháp khai báo state và thay đổi state
- Luồng chạy của code khi có sự thay đổi state

```javascript
import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';

const CompFunction = () => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Text>{count}</Text>
            <Pressable onPress={() => setCount(count + 1)}/>
        </View>
    )
}
```

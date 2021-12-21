
## 1, React useEffect:

```javascript
import { useEffect } from 'react';

const CompFunction = () => {

    useEffect(() => {
        alert('x')
    }, [])

    return (
        <View>
        </View>
    )
}
```

## 2, Stores, ContextData:
- Mang tính chất 1 cơ sở dữ liệu
- Truy cập được ở tất cả các màn 

```javascript
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
	const [data, setData] = useState([])

	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => {
	const values = useContext(DataContext);
	return values;
};

```

## 3, AsyncStorage:
- Sử dụng khi cần lưu dữ liệu qua nhiều phiên đăng nhập
- Async Await 


```bash
expo install @react-native-async-storage/async-storage
```

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu data
await AsyncStorage.setItem('KEY', 'value'); // value phải ở dạng string

// Lấy data
let data = await AsyncStorage.getItem('KEY') // value lấy được ở dạng string, phải parse ra nếu cần

```
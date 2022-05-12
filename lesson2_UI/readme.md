## 1, yarn:
gõ lệnh trong terminal:

```bash
npm install -g yarn
```

## 2, watchman (macOS mới cần):
gõ lệnh trong terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 3, git:
download từ:
https://git-scm.com/

## 4, expo-cli:
gõ lệnh trong terminal:

```bash
npm install --global expo-cli
```

(Verify that the installation was successful by running expo whoami. You're not logged in yet, so you will see "Not logged in". You can create an account by running expo register if you like, or if you have one already run expo login, but you also don't need an account to get started)

## 5, Khởi tạo project:

```bash
expo init my-app
// chọn blank JS / TS
```

- Xoá file App.js
- Copy file trong folder template paste vào folder đã tạo

```bash
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native @react-navigation/stack @react-navigation/native-stack
```

```bash
yarn start
//or
yarn web
```

# Boxful Code Challenge

A React Native mobile app for managing shipments, built as part of the Boxful code challenge.

## Prerequisites

Before running this project, make sure you have:

- **Node.js** version 20 or higher
- **npm** or **yarn** installed
- For iOS: **Xcode** (Mac only) with iOS Simulator
- For Android: **Android Studio** with an emulator or a physical device

If you haven't set up your development environment yet, follow the official guide:
https://reactnative.dev/docs/set-up-your-environment

## Installation

1. Clone the repository and navigate to the project folder:

```bash
cd BoxfulCodeChallenge
```

2. Install the dependencies:

```bash
npm install
```

3. For iOS only, install the CocoaPods dependencies:

```bash
cd ios && pod install && cd ..
```

## Running the App

### Option 1: Quick Start (Recommended)

Run both Metro bundler and the app with a single command:

**For iOS:**
```bash
npm run ios
```

**For Android:**
```bash
npm run android
```

### Option 2: Manual Start

If you prefer more control, you can start things separately:

1. Start the Metro bundler in one terminal:
```bash
npm start
```

2. In another terminal, run the app:
```bash
npm run ios
# or
npm run android
```

## App Features

- **Login Screen**: Authentication mockup with email/password
- **Registration Screen**: Create account form with pre-filled dummy data
- **Home Screen**: Dashboard with quick actions and recent shipments
- **Create Shipment**: Add new shipments with recipient info and status
- **History**: View all shipments with status filtering
- **Analytics**: Coming soon
- **Billing**: Coming soon
- **Account**: User profile with logout functionality

## Project Structure

```
src/
├── assets/          # Images and SVG files
├── context/         # React Context for state management
├── navigation/      # Navigation configuration
├── screens/         # App screens
│   ├── auth/        # Login and Register screens
│   └── home/        # Main app screens
├── theme/           # Colors, spacing, and images
└── types/           # TypeScript type definitions
```

## Troubleshooting

**Metro bundler issues:**
```bash
npm start -- --reset-cache
```

**iOS build issues:**
```bash
cd ios && pod install --repo-update && cd ..
```

**Android build issues:**
```bash
cd android && ./gradlew clean && cd ..
```

![iOS App demo](https://www.loom.com/share/b4ce6066397d417b9bab5efa9d0fe54e)
![Android App demo](https://www.loom.com/share/343c4678953d4786b45967058772aea4)

For more help, check the React Native troubleshooting guide:
https://reactnative.dev/docs/troubleshooting

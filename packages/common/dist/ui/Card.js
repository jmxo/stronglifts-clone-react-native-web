"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        padding: 10,
    },
});
exports.Card = function (_a) {
    var children = _a.children, onPress = _a.onPress;
    if (onPress) {
        return (React.createElement(react_native_1.TouchableOpacity, { style: styles.card, onPress: onPress }, children));
    }
    return React.createElement(react_native_1.View, { style: styles.card }, children);
};

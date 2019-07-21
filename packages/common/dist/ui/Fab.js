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
    fab: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "red",
        position: "absolute",
        bottom: 20,
        right: 20,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 2,
    },
});
exports.Fab = function (_a) {
    var onPress = _a.onPress;
    return (React.createElement(react_native_1.TouchableOpacity, { style: styles.fab, onPress: onPress },
        React.createElement(react_native_1.Text, { style: styles.text }, "+")));
};

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
export const enum KeyCode {
	DependsOnKbLayout = -1,

	/**
	 * Placed first to cover the 0 value of the enum.
	 */
	Unknown = 0,

	Backspace = 1,
	Tab = 2,
	Enter = 3,
	Shift = 4,
	Ctrl = 5,
	Alt = 6,
	PauseBreak = 7,
	CapsLock = 8,
	Escape = 9,
	Space = 10,
	PageUp = 11,
	PageDown = 12,
	End = 13,
	Home = 14,
	LeftArrow = 15,
	UpArrow = 16,
	RightArrow = 17,
	DownArrow = 18,
	Insert = 19,
	Delete = 20,

	KEY_0 = 21,
	KEY_1 = 22,
	KEY_2 = 23,
	KEY_3 = 24,
	KEY_4 = 25,
	KEY_5 = 26,
	KEY_6 = 27,
	KEY_7 = 28,
	KEY_8 = 29,
	KEY_9 = 30,

	KEY_A = 31,
	KEY_B = 32,
	KEY_C = 33,
	KEY_D = 34,
	KEY_E = 35,
	KEY_F = 36,
	KEY_G = 37,
	KEY_H = 38,
	KEY_I = 39,
	KEY_J = 40,
	KEY_K = 41,
	KEY_L = 42,
	KEY_M = 43,
	KEY_N = 44,
	KEY_O = 45,
	KEY_P = 46,
	KEY_Q = 47,
	KEY_R = 48,
	KEY_S = 49,
	KEY_T = 50,
	KEY_U = 51,
	KEY_V = 52,
	KEY_W = 53,
	KEY_X = 54,
	KEY_Y = 55,
	KEY_Z = 56,

	Meta = 57,
	ContextMenu = 58,

	F1 = 59,
	F2 = 60,
	F3 = 61,
	F4 = 62,
	F5 = 63,
	F6 = 64,
	F7 = 65,
	F8 = 66,
	F9 = 67,
	F10 = 68,
	F11 = 69,
	F12 = 70,
	F13 = 71,
	F14 = 72,
	F15 = 73,
	F16 = 74,
	F17 = 75,
	F18 = 76,
	F19 = 77,

	NumLock = 78,
	ScrollLock = 79,

	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ';:' key
	 */
	US_SEMICOLON = 80,
	/**
	 * For any country/region, the '+' key
	 * For the US standard keyboard, the '=+' key
	 */
	US_EQUAL = 81,
	/**
	 * For any country/region, the ',' key
	 * For the US standard keyboard, the ',<' key
	 */
	US_COMMA = 82,
	/**
	 * For any country/region, the '-' key
	 * For the US standard keyboard, the '-_' key
	 */
	US_MINUS = 83,
	/**
	 * For any country/region, the '.' key
	 * For the US standard keyboard, the '.>' key
	 */
	US_DOT = 84,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '/?' key
	 */
	US_SLASH = 85,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '`~' key
	 */
	US_BACKTICK = 86,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '[{' key
	 */
	US_OPEN_SQUARE_BRACKET = 87,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '\|' key
	 */
	US_BACKSLASH = 88,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ']}' key
	 */
	US_CLOSE_SQUARE_BRACKET = 89,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ''"' key
	 */
	US_QUOTE = 90,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 */
	OEM_8 = 91,
	/**
	 * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
	 */
	OEM_102 = 92,

	NUMPAD_0 = 93, // VK_NUMPAD0, 0x60, Numeric keypad 0 key
	NUMPAD_1 = 94, // VK_NUMPAD1, 0x61, Numeric keypad 1 key
	NUMPAD_2 = 95, // VK_NUMPAD2, 0x62, Numeric keypad 2 key
	NUMPAD_3 = 96, // VK_NUMPAD3, 0x63, Numeric keypad 3 key
	NUMPAD_4 = 97, // VK_NUMPAD4, 0x64, Numeric keypad 4 key
	NUMPAD_5 = 98, // VK_NUMPAD5, 0x65, Numeric keypad 5 key
	NUMPAD_6 = 99, // VK_NUMPAD6, 0x66, Numeric keypad 6 key
	NUMPAD_7 = 100, // VK_NUMPAD7, 0x67, Numeric keypad 7 key
	NUMPAD_8 = 101, // VK_NUMPAD8, 0x68, Numeric keypad 8 key
	NUMPAD_9 = 102, // VK_NUMPAD9, 0x69, Numeric keypad 9 key

	NUMPAD_MULTIPLY = 103,	// VK_MULTIPLY, 0x6A, Multiply key
	NUMPAD_ADD = 104,		// VK_ADD, 0x6B, Add key
	NUMPAD_SEPARATOR = 105,	// VK_SEPARATOR, 0x6C, Separator key
	NUMPAD_SUBTRACT = 106,	// VK_SUBTRACT, 0x6D, Subtract key
	NUMPAD_DECIMAL = 107,	// VK_DECIMAL, 0x6E, Decimal key
	NUMPAD_DIVIDE = 108,	// VK_DIVIDE, 0x6F,

	/**
	 * Cover all key codes when IME is processing input.
	 */
	KEY_IN_COMPOSITION = 109,

	ABNT_C1 = 110, // Brazilian (ABNT) Keyboard
	ABNT_C2 = 111, // Brazilian (ABNT) Keyboard

	BrowserBack = 112,
	BrowserForward = 113,

	MediaTrackNext = 114,
	MediaTrackPrevious = 115,
	MediaStop = 116,
	MediaPlayPause = 117,

	/**
	 * Placed last to cover the length of the enum.
	 * Please do not depend on this value!
	 */
	MAX_VALUE
}

class KeyCodeStrMap {

	private _keyCodeToStr: string[];
	private _strToKeyCode: { [str: string]: KeyCode; };

	constructor() {
		this._keyCodeToStr = [];
		this._strToKeyCode = Object.create(null);
	}

	define(keyCode: KeyCode, str: string): void {
		this._keyCodeToStr[keyCode] = str;
		this._strToKeyCode[str.toLowerCase()] = keyCode;
	}

	keyCodeToStr(keyCode: KeyCode): string {
		return this._keyCodeToStr[keyCode];
	}

	strToKeyCode(str: string): KeyCode {
		return this._strToKeyCode[str.toLowerCase()] || KeyCode.Unknown;
	}
}

const uiMap = new KeyCodeStrMap();
const userSettingsUSMap = new KeyCodeStrMap();
const userSettingsGeneralMap = new KeyCodeStrMap();

(function () {

	function define(keyCode: KeyCode, uiLabel: string, usUserSettingsLabel: string = uiLabel, generalUserSettingsLabel: string = usUserSettingsLabel): void {
		uiMap.define(keyCode, uiLabel);
		userSettingsUSMap.define(keyCode, usUserSettingsLabel);
		userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
	}

	define(KeyCode.Unknown, 'unknown');

	define(KeyCode.Backspace, 'Backspace');
	define(KeyCode.Tab, 'Tab');
	define(KeyCode.Enter, 'Enter');
	define(KeyCode.Shift, 'Shift');
	define(KeyCode.Ctrl, 'Ctrl');
	define(KeyCode.Alt, 'Alt');
	define(KeyCode.PauseBreak, 'PauseBreak');
	define(KeyCode.CapsLock, 'CapsLock');
	define(KeyCode.Escape, 'Escape');
	define(KeyCode.Space, 'Space');
	define(KeyCode.PageUp, 'PageUp');
	define(KeyCode.PageDown, 'PageDown');
	define(KeyCode.End, 'End');
	define(KeyCode.Home, 'Home');

	define(KeyCode.LeftArrow, 'LeftArrow', 'Left');
	define(KeyCode.UpArrow, 'UpArrow', 'Up');
	define(KeyCode.RightArrow, 'RightArrow', 'Right');
	define(KeyCode.DownArrow, 'DownArrow', 'Down');
	define(KeyCode.Insert, 'Insert');
	define(KeyCode.Delete, 'Delete');

	define(KeyCode.KEY_0, '0');
	define(KeyCode.KEY_1, '1');
	define(KeyCode.KEY_2, '2');
	define(KeyCode.KEY_3, '3');
	define(KeyCode.KEY_4, '4');
	define(KeyCode.KEY_5, '5');
	define(KeyCode.KEY_6, '6');
	define(KeyCode.KEY_7, '7');
	define(KeyCode.KEY_8, '8');
	define(KeyCode.KEY_9, '9');

	define(KeyCode.KEY_A, 'A');
	define(KeyCode.KEY_B, 'B');
	define(KeyCode.KEY_C, 'C');
	define(KeyCode.KEY_D, 'D');
	define(KeyCode.KEY_E, 'E');
	define(KeyCode.KEY_F, 'F');
	define(KeyCode.KEY_G, 'G');
	define(KeyCode.KEY_H, 'H');
	define(KeyCode.KEY_I, 'I');
	define(KeyCode.KEY_J, 'J');
	define(KeyCode.KEY_K, 'K');
	define(KeyCode.KEY_L, 'L');
	define(KeyCode.KEY_M, 'M');
	define(KeyCode.KEY_N, 'N');
	define(KeyCode.KEY_O, 'O');
	define(KeyCode.KEY_P, 'P');
	define(KeyCode.KEY_Q, 'Q');
	define(KeyCode.KEY_R, 'R');
	define(KeyCode.KEY_S, 'S');
	define(KeyCode.KEY_T, 'T');
	define(KeyCode.KEY_U, 'U');
	define(KeyCode.KEY_V, 'V');
	define(KeyCode.KEY_W, 'W');
	define(KeyCode.KEY_X, 'X');
	define(KeyCode.KEY_Y, 'Y');
	define(KeyCode.KEY_Z, 'Z');

	define(KeyCode.Meta, 'Meta');
	define(KeyCode.ContextMenu, 'ContextMenu');

	define(KeyCode.F1, 'F1');
	define(KeyCode.F2, 'F2');
	define(KeyCode.F3, 'F3');
	define(KeyCode.F4, 'F4');
	define(KeyCode.F5, 'F5');
	define(KeyCode.F6, 'F6');
	define(KeyCode.F7, 'F7');
	define(KeyCode.F8, 'F8');
	define(KeyCode.F9, 'F9');
	define(KeyCode.F10, 'F10');
	define(KeyCode.F11, 'F11');
	define(KeyCode.F12, 'F12');
	define(KeyCode.F13, 'F13');
	define(KeyCode.F14, 'F14');
	define(KeyCode.F15, 'F15');
	define(KeyCode.F16, 'F16');
	define(KeyCode.F17, 'F17');
	define(KeyCode.F18, 'F18');
	define(KeyCode.F19, 'F19');

	define(KeyCode.NumLock, 'NumLock');
	define(KeyCode.ScrollLock, 'ScrollLock');

	define(KeyCode.US_SEMICOLON, ';', ';', 'OEM_1');
	define(KeyCode.US_EQUAL, '=', '=', 'OEM_PLUS');
	define(KeyCode.US_COMMA, ',', ',', 'OEM_COMMA');
	define(KeyCode.US_MINUS, '-', '-', 'OEM_MINUS');
	define(KeyCode.US_DOT, '.', '.', 'OEM_PERIOD');
	define(KeyCode.US_SLASH, '/', '/', 'OEM_2');
	define(KeyCode.US_BACKTICK, '`', '`', 'OEM_3');
	define(KeyCode.ABNT_C1, 'ABNT_C1');
	define(KeyCode.ABNT_C2, 'ABNT_C2');
	define(KeyCode.US_OPEN_SQUARE_BRACKET, '[', '[', 'OEM_4');
	define(KeyCode.US_BACKSLASH, '\\', '\\', 'OEM_5');
	define(KeyCode.US_CLOSE_SQUARE_BRACKET, ']', ']', 'OEM_6');
	define(KeyCode.US_QUOTE, '\'', '\'', 'OEM_7');
	define(KeyCode.OEM_8, 'OEM_8');
	define(KeyCode.OEM_102, 'OEM_102');

	define(KeyCode.NUMPAD_0, 'NumPad0');
	define(KeyCode.NUMPAD_1, 'NumPad1');
	define(KeyCode.NUMPAD_2, 'NumPad2');
	define(KeyCode.NUMPAD_3, 'NumPad3');
	define(KeyCode.NUMPAD_4, 'NumPad4');
	define(KeyCode.NUMPAD_5, 'NumPad5');
	define(KeyCode.NUMPAD_6, 'NumPad6');
	define(KeyCode.NUMPAD_7, 'NumPad7');
	define(KeyCode.NUMPAD_8, 'NumPad8');
	define(KeyCode.NUMPAD_9, 'NumPad9');

	define(KeyCode.NUMPAD_MULTIPLY, 'NumPad_Multiply');
	define(KeyCode.NUMPAD_ADD, 'NumPad_Add');
	define(KeyCode.NUMPAD_SEPARATOR, 'NumPad_Separator');
	define(KeyCode.NUMPAD_SUBTRACT, 'NumPad_Subtract');
	define(KeyCode.NUMPAD_DECIMAL, 'NumPad_Decimal');
	define(KeyCode.NUMPAD_DIVIDE, 'NumPad_Divide');

	define(KeyCode.BrowserBack, 'BrowserBack');
	define(KeyCode.BrowserForward, 'BrowserForward');

	define(KeyCode.MediaTrackNext, 'MediaTrackNext');
	define(KeyCode.MediaTrackPrevious, 'MediaTrackPrevious');
	define(KeyCode.MediaStop, 'MediaStop');
	define(KeyCode.MediaPlayPause, 'MediaPlayPause');

})();

/**
 * keyboardEvent.code
 */
export const enum ScanCode {
	DependsOnKbLayout = -1,
	None,

	Hyper,
	Super,
	Fn,
	FnLock,
	Suspend,
	Resume,
	Turbo,
	Sleep,
	WakeUp,
	KeyA,
	KeyB,
	KeyC,
	KeyD,
	KeyE,
	KeyF,
	KeyG,
	KeyH,
	KeyI,
	KeyJ,
	KeyK,
	KeyL,
	KeyM,
	KeyN,
	KeyO,
	KeyP,
	KeyQ,
	KeyR,
	KeyS,
	KeyT,
	KeyU,
	KeyV,
	KeyW,
	KeyX,
	KeyY,
	KeyZ,
	Digit1,
	Digit2,
	Digit3,
	Digit4,
	Digit5,
	Digit6,
	Digit7,
	Digit8,
	Digit9,
	Digit0,
	Enter,
	Escape,
	Backspace,
	Tab,
	Space,
	Minus,
	Equal,
	BracketLeft,
	BracketRight,
	Backslash,
	IntlHash,
	Semicolon,
	Quote,
	Backquote,
	Comma,
	Period,
	Slash,
	CapsLock,
	F1,
	F2,
	F3,
	F4,
	F5,
	F6,
	F7,
	F8,
	F9,
	F10,
	F11,
	F12,
	PrintScreen,
	ScrollLock,
	Pause,
	Insert,
	Home,
	PageUp,
	Delete,
	End,
	PageDown,
	ArrowRight,
	ArrowLeft,
	ArrowDown,
	ArrowUp,
	NumLock,
	NumpadDivide,
	NumpadMultiply,
	NumpadSubtract,
	NumpadAdd,
	NumpadEnter,
	Numpad1,
	Numpad2,
	Numpad3,
	Numpad4,
	Numpad5,
	Numpad6,
	Numpad7,
	Numpad8,
	Numpad9,
	Numpad0,
	NumpadDecimal,
	IntlBackslash,
	ContextMenu,
	Power,
	NumpadEqual,
	F13,
	F14,
	F15,
	F16,
	F17,
	F18,
	F19,
	F20,
	F21,
	F22,
	F23,
	F24,
	Open,
	Help,
	Select,
	Again,
	Undo,
	Cut,
	Copy,
	Paste,
	Find,
	AudioVolumeMute,
	AudioVolumeUp,
	AudioVolumeDown,
	NumpadComma,
	IntlRo,
	KanaMode,
	IntlYen,
	Convert,
	NonConvert,
	Lang1,
	Lang2,
	Lang3,
	Lang4,
	Lang5,
	Abort,
	Props,
	NumpadParenLeft,
	NumpadParenRight,
	NumpadBackspace,
	NumpadMemoryStore,
	NumpadMemoryRecall,
	NumpadMemoryClear,
	NumpadMemoryAdd,
	NumpadMemorySubtract,
	NumpadClear,
	NumpadClearEntry,
	ControlLeft,
	ShiftLeft,
	AltLeft,
	MetaLeft,
	ControlRight,
	ShiftRight,
	AltRight,
	MetaRight,
	BrightnessUp,
	BrightnessDown,
	MediaPlay,
	MediaRecord,
	MediaFastForward,
	MediaRewind,
	MediaTrackNext,
	MediaTrackPrevious,
	MediaStop,
	Eject,
	MediaPlayPause,
	MediaSelect,
	LaunchMail,
	LaunchApp2,
	LaunchApp1,
	SelectTask,
	LaunchScreenSaver,
	BrowserSearch,
	BrowserHome,
	BrowserBack,
	BrowserForward,
	BrowserStop,
	BrowserRefresh,
	BrowserFavorites,
	ZoomToggle,
	MailReply,
	MailForward,
	MailSend,

	MAX_VALUE
}

const scanCodeIntToStr: string[] = [];
const scanCodeStrToInt: { [code: string]: number; } = Object.create(null);
const scanCodeLowerCaseStrToInt: { [code: string]: number; } = Object.create(null);

export const ScanCodeUtils = {
	lowerCaseToEnum: (scanCode: string) => scanCodeLowerCaseStrToInt[scanCode] || ScanCode.None,
	toEnum: (scanCode: string) => scanCodeStrToInt[scanCode] || ScanCode.None,
	toString: (scanCode: ScanCode) => scanCodeIntToStr[scanCode] || 'None'
};

/**
 * -1 if a ScanCode => KeyCode mapping depends on kb layout.
 */
export const IMMUTABLE_CODE_TO_KEY_CODE: KeyCode[] = [];

/**
 * -1 if a KeyCode => ScanCode mapping depends on kb layout.
 */
export const IMMUTABLE_KEY_CODE_TO_CODE: ScanCode[] = [];

(function () {
	function d(intScanCode: ScanCode, strScanCode: string): void {
		scanCodeIntToStr[intScanCode] = strScanCode;
		scanCodeStrToInt[strScanCode] = intScanCode;
		scanCodeLowerCaseStrToInt[strScanCode.toLowerCase()] = intScanCode;
	}
	d(ScanCode.None, 'None');
	d(ScanCode.Hyper, 'Hyper');
	d(ScanCode.Super, 'Super');
	d(ScanCode.Fn, 'Fn');
	d(ScanCode.FnLock, 'FnLock');
	d(ScanCode.Suspend, 'Suspend');
	d(ScanCode.Resume, 'Resume');
	d(ScanCode.Turbo, 'Turbo');
	d(ScanCode.Sleep, 'Sleep');
	d(ScanCode.WakeUp, 'WakeUp');
	d(ScanCode.KeyA, 'KeyA');
	d(ScanCode.KeyB, 'KeyB');
	d(ScanCode.KeyC, 'KeyC');
	d(ScanCode.KeyD, 'KeyD');
	d(ScanCode.KeyE, 'KeyE');
	d(ScanCode.KeyF, 'KeyF');
	d(ScanCode.KeyG, 'KeyG');
	d(ScanCode.KeyH, 'KeyH');
	d(ScanCode.KeyI, 'KeyI');
	d(ScanCode.KeyJ, 'KeyJ');
	d(ScanCode.KeyK, 'KeyK');
	d(ScanCode.KeyL, 'KeyL');
	d(ScanCode.KeyM, 'KeyM');
	d(ScanCode.KeyN, 'KeyN');
	d(ScanCode.KeyO, 'KeyO');
	d(ScanCode.KeyP, 'KeyP');
	d(ScanCode.KeyQ, 'KeyQ');
	d(ScanCode.KeyR, 'KeyR');
	d(ScanCode.KeyS, 'KeyS');
	d(ScanCode.KeyT, 'KeyT');
	d(ScanCode.KeyU, 'KeyU');
	d(ScanCode.KeyV, 'KeyV');
	d(ScanCode.KeyW, 'KeyW');
	d(ScanCode.KeyX, 'KeyX');
	d(ScanCode.KeyY, 'KeyY');
	d(ScanCode.KeyZ, 'KeyZ');
	d(ScanCode.Digit1, 'Digit1');
	d(ScanCode.Digit2, 'Digit2');
	d(ScanCode.Digit3, 'Digit3');
	d(ScanCode.Digit4, 'Digit4');
	d(ScanCode.Digit5, 'Digit5');
	d(ScanCode.Digit6, 'Digit6');
	d(ScanCode.Digit7, 'Digit7');
	d(ScanCode.Digit8, 'Digit8');
	d(ScanCode.Digit9, 'Digit9');
	d(ScanCode.Digit0, 'Digit0');
	d(ScanCode.Enter, 'Enter');
	d(ScanCode.Escape, 'Escape');
	d(ScanCode.Backspace, 'Backspace');
	d(ScanCode.Tab, 'Tab');
	d(ScanCode.Space, 'Space');
	d(ScanCode.Minus, 'Minus');
	d(ScanCode.Equal, 'Equal');
	d(ScanCode.BracketLeft, 'BracketLeft');
	d(ScanCode.BracketRight, 'BracketRight');
	d(ScanCode.Backslash, 'Backslash');
	d(ScanCode.IntlHash, 'IntlHash');
	d(ScanCode.Semicolon, 'Semicolon');
	d(ScanCode.Quote, 'Quote');
	d(ScanCode.Backquote, 'Backquote');
	d(ScanCode.Comma, 'Comma');
	d(ScanCode.Period, 'Period');
	d(ScanCode.Slash, 'Slash');
	d(ScanCode.CapsLock, 'CapsLock');
	d(ScanCode.F1, 'F1');
	d(ScanCode.F2, 'F2');
	d(ScanCode.F3, 'F3');
	d(ScanCode.F4, 'F4');
	d(ScanCode.F5, 'F5');
	d(ScanCode.F6, 'F6');
	d(ScanCode.F7, 'F7');
	d(ScanCode.F8, 'F8');
	d(ScanCode.F9, 'F9');
	d(ScanCode.F10, 'F10');
	d(ScanCode.F11, 'F11');
	d(ScanCode.F12, 'F12');
	d(ScanCode.PrintScreen, 'PrintScreen');
	d(ScanCode.ScrollLock, 'ScrollLock');
	d(ScanCode.Pause, 'Pause');
	d(ScanCode.Insert, 'Insert');
	d(ScanCode.Home, 'Home');
	d(ScanCode.PageUp, 'PageUp');
	d(ScanCode.Delete, 'Delete');
	d(ScanCode.End, 'End');
	d(ScanCode.PageDown, 'PageDown');
	d(ScanCode.ArrowRight, 'ArrowRight');
	d(ScanCode.ArrowLeft, 'ArrowLeft');
	d(ScanCode.ArrowDown, 'ArrowDown');
	d(ScanCode.ArrowUp, 'ArrowUp');
	d(ScanCode.NumLock, 'NumLock');
	d(ScanCode.NumpadDivide, 'NumpadDivide');
	d(ScanCode.NumpadMultiply, 'NumpadMultiply');
	d(ScanCode.NumpadSubtract, 'NumpadSubtract');
	d(ScanCode.NumpadAdd, 'NumpadAdd');
	d(ScanCode.NumpadEnter, 'NumpadEnter');
	d(ScanCode.Numpad1, 'Numpad1');
	d(ScanCode.Numpad2, 'Numpad2');
	d(ScanCode.Numpad3, 'Numpad3');
	d(ScanCode.Numpad4, 'Numpad4');
	d(ScanCode.Numpad5, 'Numpad5');
	d(ScanCode.Numpad6, 'Numpad6');
	d(ScanCode.Numpad7, 'Numpad7');
	d(ScanCode.Numpad8, 'Numpad8');
	d(ScanCode.Numpad9, 'Numpad9');
	d(ScanCode.Numpad0, 'Numpad0');
	d(ScanCode.NumpadDecimal, 'NumpadDecimal');
	d(ScanCode.IntlBackslash, 'IntlBackslash');
	d(ScanCode.ContextMenu, 'ContextMenu');
	d(ScanCode.Power, 'Power');
	d(ScanCode.NumpadEqual, 'NumpadEqual');
	d(ScanCode.F13, 'F13');
	d(ScanCode.F14, 'F14');
	d(ScanCode.F15, 'F15');
	d(ScanCode.F16, 'F16');
	d(ScanCode.F17, 'F17');
	d(ScanCode.F18, 'F18');
	d(ScanCode.F19, 'F19');
	d(ScanCode.F20, 'F20');
	d(ScanCode.F21, 'F21');
	d(ScanCode.F22, 'F22');
	d(ScanCode.F23, 'F23');
	d(ScanCode.F24, 'F24');
	d(ScanCode.Open, 'Open');
	d(ScanCode.Help, 'Help');
	d(ScanCode.Select, 'Select');
	d(ScanCode.Again, 'Again');
	d(ScanCode.Undo, 'Undo');
	d(ScanCode.Cut, 'Cut');
	d(ScanCode.Copy, 'Copy');
	d(ScanCode.Paste, 'Paste');
	d(ScanCode.Find, 'Find');
	d(ScanCode.AudioVolumeMute, 'AudioVolumeMute');
	d(ScanCode.AudioVolumeUp, 'AudioVolumeUp');
	d(ScanCode.AudioVolumeDown, 'AudioVolumeDown');
	d(ScanCode.NumpadComma, 'NumpadComma');
	d(ScanCode.IntlRo, 'IntlRo');
	d(ScanCode.KanaMode, 'KanaMode');
	d(ScanCode.IntlYen, 'IntlYen');
	d(ScanCode.Convert, 'Convert');
	d(ScanCode.NonConvert, 'NonConvert');
	d(ScanCode.Lang1, 'Lang1');
	d(ScanCode.Lang2, 'Lang2');
	d(ScanCode.Lang3, 'Lang3');
	d(ScanCode.Lang4, 'Lang4');
	d(ScanCode.Lang5, 'Lang5');
	d(ScanCode.Abort, 'Abort');
	d(ScanCode.Props, 'Props');
	d(ScanCode.NumpadParenLeft, 'NumpadParenLeft');
	d(ScanCode.NumpadParenRight, 'NumpadParenRight');
	d(ScanCode.NumpadBackspace, 'NumpadBackspace');
	d(ScanCode.NumpadMemoryStore, 'NumpadMemoryStore');
	d(ScanCode.NumpadMemoryRecall, 'NumpadMemoryRecall');
	d(ScanCode.NumpadMemoryClear, 'NumpadMemoryClear');
	d(ScanCode.NumpadMemoryAdd, 'NumpadMemoryAdd');
	d(ScanCode.NumpadMemorySubtract, 'NumpadMemorySubtract');
	d(ScanCode.NumpadClear, 'NumpadClear');
	d(ScanCode.NumpadClearEntry, 'NumpadClearEntry');
	d(ScanCode.ControlLeft, 'ControlLeft');
	d(ScanCode.ShiftLeft, 'ShiftLeft');
	d(ScanCode.AltLeft, 'AltLeft');
	d(ScanCode.MetaLeft, 'MetaLeft');
	d(ScanCode.ControlRight, 'ControlRight');
	d(ScanCode.ShiftRight, 'ShiftRight');
	d(ScanCode.AltRight, 'AltRight');
	d(ScanCode.MetaRight, 'MetaRight');
	d(ScanCode.BrightnessUp, 'BrightnessUp');
	d(ScanCode.BrightnessDown, 'BrightnessDown');
	d(ScanCode.MediaPlay, 'MediaPlay');
	d(ScanCode.MediaRecord, 'MediaRecord');
	d(ScanCode.MediaFastForward, 'MediaFastForward');
	d(ScanCode.MediaRewind, 'MediaRewind');
	d(ScanCode.MediaTrackNext, 'MediaTrackNext');
	d(ScanCode.MediaTrackPrevious, 'MediaTrackPrevious');
	d(ScanCode.MediaStop, 'MediaStop');
	d(ScanCode.Eject, 'Eject');
	d(ScanCode.MediaPlayPause, 'MediaPlayPause');
	d(ScanCode.MediaSelect, 'MediaSelect');
	d(ScanCode.LaunchMail, 'LaunchMail');
	d(ScanCode.LaunchApp2, 'LaunchApp2');
	d(ScanCode.LaunchApp1, 'LaunchApp1');
	d(ScanCode.SelectTask, 'SelectTask');
	d(ScanCode.LaunchScreenSaver, 'LaunchScreenSaver');
	d(ScanCode.BrowserSearch, 'BrowserSearch');
	d(ScanCode.BrowserHome, 'BrowserHome');
	d(ScanCode.BrowserBack, 'BrowserBack');
	d(ScanCode.BrowserForward, 'BrowserForward');
	d(ScanCode.BrowserStop, 'BrowserStop');
	d(ScanCode.BrowserRefresh, 'BrowserRefresh');
	d(ScanCode.BrowserFavorites, 'BrowserFavorites');
	d(ScanCode.ZoomToggle, 'ZoomToggle');
	d(ScanCode.MailReply, 'MailReply');
	d(ScanCode.MailForward, 'MailForward');
	d(ScanCode.MailSend, 'MailSend');
})();

(function () {
	for (let i = 0; i <= ScanCode.MAX_VALUE; i++) {
		IMMUTABLE_CODE_TO_KEY_CODE[i] = KeyCode.DependsOnKbLayout;
	}

	for (let i = 0; i <= KeyCode.MAX_VALUE; i++) {
		IMMUTABLE_KEY_CODE_TO_CODE[i] = ScanCode.DependsOnKbLayout;
	}

	function define(code: ScanCode, keyCode: KeyCode): void {
		IMMUTABLE_CODE_TO_KEY_CODE[code] = keyCode;

		if (
			(keyCode !== KeyCode.Unknown)
			&& (keyCode !== KeyCode.Enter)
			&& (keyCode !== KeyCode.Ctrl)
			&& (keyCode !== KeyCode.Shift)
			&& (keyCode !== KeyCode.Alt)
			&& (keyCode !== KeyCode.Meta)
		) {
			IMMUTABLE_KEY_CODE_TO_CODE[keyCode] = code;
		}
	}

	// Manually added due to the exclusion above (due to duplication with NumpadEnter)
	IMMUTABLE_KEY_CODE_TO_CODE[KeyCode.Enter] = ScanCode.Enter;

	define(ScanCode.None, KeyCode.Unknown);
	define(ScanCode.Hyper, KeyCode.Unknown);
	define(ScanCode.Super, KeyCode.Unknown);
	define(ScanCode.Fn, KeyCode.Unknown);
	define(ScanCode.FnLock, KeyCode.Unknown);
	define(ScanCode.Suspend, KeyCode.Unknown);
	define(ScanCode.Resume, KeyCode.Unknown);
	define(ScanCode.Turbo, KeyCode.Unknown);
	define(ScanCode.Sleep, KeyCode.Unknown);
	define(ScanCode.WakeUp, KeyCode.Unknown);
	// define(ScanCode.KeyA, KeyCode.Unknown);
	// define(ScanCode.KeyB, KeyCode.Unknown);
	// define(ScanCode.KeyC, KeyCode.Unknown);
	// define(ScanCode.KeyD, KeyCode.Unknown);
	// define(ScanCode.KeyE, KeyCode.Unknown);
	// define(ScanCode.KeyF, KeyCode.Unknown);
	// define(ScanCode.KeyG, KeyCode.Unknown);
	// define(ScanCode.KeyH, KeyCode.Unknown);
	// define(ScanCode.KeyI, KeyCode.Unknown);
	// define(ScanCode.KeyJ, KeyCode.Unknown);
	// define(ScanCode.KeyK, KeyCode.Unknown);
	// define(ScanCode.KeyL, KeyCode.Unknown);
	// define(ScanCode.KeyM, KeyCode.Unknown);
	// define(ScanCode.KeyN, KeyCode.Unknown);
	// define(ScanCode.KeyO, KeyCode.Unknown);
	// define(ScanCode.KeyP, KeyCode.Unknown);
	// define(ScanCode.KeyQ, KeyCode.Unknown);
	// define(ScanCode.KeyR, KeyCode.Unknown);
	// define(ScanCode.KeyS, KeyCode.Unknown);
	// define(ScanCode.KeyT, KeyCode.Unknown);
	// define(ScanCode.KeyU, KeyCode.Unknown);
	// define(ScanCode.KeyV, KeyCode.Unknown);
	// define(ScanCode.KeyW, KeyCode.Unknown);
	// define(ScanCode.KeyX, KeyCode.Unknown);
	// define(ScanCode.KeyY, KeyCode.Unknown);
	// define(ScanCode.KeyZ, KeyCode.Unknown);
	// define(ScanCode.Digit1, KeyCode.Unknown);
	// define(ScanCode.Digit2, KeyCode.Unknown);
	// define(ScanCode.Digit3, KeyCode.Unknown);
	// define(ScanCode.Digit4, KeyCode.Unknown);
	// define(ScanCode.Digit5, KeyCode.Unknown);
	// define(ScanCode.Digit6, KeyCode.Unknown);
	// define(ScanCode.Digit7, KeyCode.Unknown);
	// define(ScanCode.Digit8, KeyCode.Unknown);
	// define(ScanCode.Digit9, KeyCode.Unknown);
	// define(ScanCode.Digit0, KeyCode.Unknown);
	define(ScanCode.Enter, KeyCode.Enter);
	define(ScanCode.Escape, KeyCode.Escape);
	define(ScanCode.Backspace, KeyCode.Backspace);
	define(ScanCode.Tab, KeyCode.Tab);
	define(ScanCode.Space, KeyCode.Space);
	// define(ScanCode.Minus, KeyCode.Unknown);
	// define(ScanCode.Equal, KeyCode.Unknown);
	// define(ScanCode.BracketLeft, KeyCode.Unknown);
	// define(ScanCode.BracketRight, KeyCode.Unknown);
	// define(ScanCode.Backslash, KeyCode.Unknown);
	// define(ScanCode.IntlHash, KeyCode.Unknown);
	// define(ScanCode.Semicolon, KeyCode.Unknown);
	// define(ScanCode.Quote, KeyCode.Unknown);
	// define(ScanCode.Backquote, KeyCode.Unknown);
	// define(ScanCode.Comma, KeyCode.Unknown);
	// define(ScanCode.Period, KeyCode.Unknown);
	// define(ScanCode.Slash, KeyCode.Unknown);
	define(ScanCode.CapsLock, KeyCode.CapsLock);
	define(ScanCode.F1, KeyCode.F1);
	define(ScanCode.F2, KeyCode.F2);
	define(ScanCode.F3, KeyCode.F3);
	define(ScanCode.F4, KeyCode.F4);
	define(ScanCode.F5, KeyCode.F5);
	define(ScanCode.F6, KeyCode.F6);
	define(ScanCode.F7, KeyCode.F7);
	define(ScanCode.F8, KeyCode.F8);
	define(ScanCode.F9, KeyCode.F9);
	define(ScanCode.F10, KeyCode.F10);
	define(ScanCode.F11, KeyCode.F11);
	define(ScanCode.F12, KeyCode.F12);
	define(ScanCode.PrintScreen, KeyCode.Unknown);
	define(ScanCode.ScrollLock, KeyCode.ScrollLock);
	define(ScanCode.Pause, KeyCode.PauseBreak);
	define(ScanCode.Insert, KeyCode.Insert);
	define(ScanCode.Home, KeyCode.Home);
	define(ScanCode.PageUp, KeyCode.PageUp);
	define(ScanCode.Delete, KeyCode.Delete);
	define(ScanCode.End, KeyCode.End);
	define(ScanCode.PageDown, KeyCode.PageDown);
	define(ScanCode.ArrowRight, KeyCode.RightArrow);
	define(ScanCode.ArrowLeft, KeyCode.LeftArrow);
	define(ScanCode.ArrowDown, KeyCode.DownArrow);
	define(ScanCode.ArrowUp, KeyCode.UpArrow);
	define(ScanCode.NumLock, KeyCode.NumLock);
	define(ScanCode.NumpadDivide, KeyCode.NUMPAD_DIVIDE);
	define(ScanCode.NumpadMultiply, KeyCode.NUMPAD_MULTIPLY);
	define(ScanCode.NumpadSubtract, KeyCode.NUMPAD_SUBTRACT);
	define(ScanCode.NumpadAdd, KeyCode.NUMPAD_ADD);
	define(ScanCode.NumpadEnter, KeyCode.Enter); // Duplicate
	define(ScanCode.Numpad1, KeyCode.NUMPAD_1);
	define(ScanCode.Numpad2, KeyCode.NUMPAD_2);
	define(ScanCode.Numpad3, KeyCode.NUMPAD_3);
	define(ScanCode.Numpad4, KeyCode.NUMPAD_4);
	define(ScanCode.Numpad5, KeyCode.NUMPAD_5);
	define(ScanCode.Numpad6, KeyCode.NUMPAD_6);
	define(ScanCode.Numpad7, KeyCode.NUMPAD_7);
	define(ScanCode.Numpad8, KeyCode.NUMPAD_8);
	define(ScanCode.Numpad9, KeyCode.NUMPAD_9);
	define(ScanCode.Numpad0, KeyCode.NUMPAD_0);
	define(ScanCode.NumpadDecimal, KeyCode.NUMPAD_DECIMAL);
	// define(ScanCode.IntlBackslash, KeyCode.Unknown);
	define(ScanCode.ContextMenu, KeyCode.ContextMenu);
	define(ScanCode.Power, KeyCode.Unknown);
	define(ScanCode.NumpadEqual, KeyCode.Unknown);
	define(ScanCode.F13, KeyCode.F13);
	define(ScanCode.F14, KeyCode.F14);
	define(ScanCode.F15, KeyCode.F15);
	define(ScanCode.F16, KeyCode.F16);
	define(ScanCode.F17, KeyCode.F17);
	define(ScanCode.F18, KeyCode.F18);
	define(ScanCode.F19, KeyCode.F19);
	define(ScanCode.F20, KeyCode.Unknown);
	define(ScanCode.F21, KeyCode.Unknown);
	define(ScanCode.F22, KeyCode.Unknown);
	define(ScanCode.F23, KeyCode.Unknown);
	define(ScanCode.F24, KeyCode.Unknown);
	define(ScanCode.Open, KeyCode.Unknown);
	define(ScanCode.Help, KeyCode.Unknown);
	define(ScanCode.Select, KeyCode.Unknown);
	define(ScanCode.Again, KeyCode.Unknown);
	define(ScanCode.Undo, KeyCode.Unknown);
	define(ScanCode.Cut, KeyCode.Unknown);
	define(ScanCode.Copy, KeyCode.Unknown);
	define(ScanCode.Paste, KeyCode.Unknown);
	define(ScanCode.Find, KeyCode.Unknown);
	define(ScanCode.AudioVolumeMute, KeyCode.Unknown);
	define(ScanCode.AudioVolumeUp, KeyCode.Unknown);
	define(ScanCode.AudioVolumeDown, KeyCode.Unknown);
	define(ScanCode.NumpadComma, KeyCode.NUMPAD_SEPARATOR);
	// define(ScanCode.IntlRo, KeyCode.Unknown);
	define(ScanCode.KanaMode, KeyCode.Unknown);
	// define(ScanCode.IntlYen, KeyCode.Unknown);
	define(ScanCode.Convert, KeyCode.Unknown);
	define(ScanCode.NonConvert, KeyCode.Unknown);
	define(ScanCode.Lang1, KeyCode.Unknown);
	define(ScanCode.Lang2, KeyCode.Unknown);
	define(ScanCode.Lang3, KeyCode.Unknown);
	define(ScanCode.Lang4, KeyCode.Unknown);
	define(ScanCode.Lang5, KeyCode.Unknown);
	define(ScanCode.Abort, KeyCode.Unknown);
	define(ScanCode.Props, KeyCode.Unknown);
	define(ScanCode.NumpadParenLeft, KeyCode.Unknown);
	define(ScanCode.NumpadParenRight, KeyCode.Unknown);
	define(ScanCode.NumpadBackspace, KeyCode.Unknown);
	define(ScanCode.NumpadMemoryStore, KeyCode.Unknown);
	define(ScanCode.NumpadMemoryRecall, KeyCode.Unknown);
	define(ScanCode.NumpadMemoryClear, KeyCode.Unknown);
	define(ScanCode.NumpadMemoryAdd, KeyCode.Unknown);
	define(ScanCode.NumpadMemorySubtract, KeyCode.Unknown);
	define(ScanCode.NumpadClear, KeyCode.Unknown);
	define(ScanCode.NumpadClearEntry, KeyCode.Unknown);
	define(ScanCode.ControlLeft, KeyCode.Ctrl); // Duplicate
	define(ScanCode.ShiftLeft, KeyCode.Shift); // Duplicate
	define(ScanCode.AltLeft, KeyCode.Alt); // Duplicate
	define(ScanCode.MetaLeft, KeyCode.Meta); // Duplicate
	define(ScanCode.ControlRight, KeyCode.Ctrl); // Duplicate
	define(ScanCode.ShiftRight, KeyCode.Shift); // Duplicate
	define(ScanCode.AltRight, KeyCode.Alt); // Duplicate
	define(ScanCode.MetaRight, KeyCode.Meta); // Duplicate
	define(ScanCode.BrightnessUp, KeyCode.Unknown);
	define(ScanCode.BrightnessDown, KeyCode.Unknown);
	define(ScanCode.MediaPlay, KeyCode.Unknown);
	define(ScanCode.MediaRecord, KeyCode.Unknown);
	define(ScanCode.MediaFastForward, KeyCode.Unknown);
	define(ScanCode.MediaRewind, KeyCode.Unknown);
	define(ScanCode.MediaTrackNext, KeyCode.MediaTrackNext);
	define(ScanCode.MediaTrackPrevious, KeyCode.MediaTrackPrevious);
	define(ScanCode.MediaStop, KeyCode.MediaStop);
	define(ScanCode.Eject, KeyCode.Unknown);
	define(ScanCode.MediaPlayPause, KeyCode.MediaPlayPause);
	define(ScanCode.MediaSelect, KeyCode.Unknown);
	define(ScanCode.LaunchMail, KeyCode.Unknown);
	define(ScanCode.LaunchApp2, KeyCode.Unknown);
	define(ScanCode.LaunchApp1, KeyCode.Unknown);
	define(ScanCode.SelectTask, KeyCode.Unknown);
	define(ScanCode.LaunchScreenSaver, KeyCode.Unknown);
	define(ScanCode.BrowserSearch, KeyCode.Unknown);
	define(ScanCode.BrowserHome, KeyCode.Unknown);
	define(ScanCode.BrowserBack, KeyCode.BrowserBack);
	define(ScanCode.BrowserForward, KeyCode.BrowserForward);
	define(ScanCode.BrowserStop, KeyCode.Unknown);
	define(ScanCode.BrowserRefresh, KeyCode.Unknown);
	define(ScanCode.BrowserFavorites, KeyCode.Unknown);
	define(ScanCode.ZoomToggle, KeyCode.Unknown);
	define(ScanCode.MailReply, KeyCode.Unknown);
	define(ScanCode.MailForward, KeyCode.Unknown);
	define(ScanCode.MailSend, KeyCode.Unknown);
})();

export namespace KeyCodeUtils {
	export function toString(keyCode: KeyCode): string {
		return uiMap.keyCodeToStr(keyCode);
	}
	export function fromString(key: string): KeyCode {
		return uiMap.strToKeyCode(key);
	}

	export function toUserSettingsUS(keyCode: KeyCode): string {
		return userSettingsUSMap.keyCodeToStr(keyCode);
	}
	export function toUserSettingsGeneral(keyCode: KeyCode): string {
		return userSettingsGeneralMap.keyCodeToStr(keyCode);
	}
	export function fromUserSettings(key: string): KeyCode {
		return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
	}

	export function toElectronAccelerator(keyCode: KeyCode): string | null {
		if (keyCode >= KeyCode.NUMPAD_0 && keyCode <= KeyCode.NUMPAD_DIVIDE) {
			// [Electron Accelerators] Electron is able to parse numpad keys, but unfortunately it
			// renders them just as regular keys in menus. For example, num0 is rendered as "0",
			// numdiv is rendered as "/", numsub is rendered as "-".
			//
			// This can lead to incredible confusion, as it makes numpad based keybindings indistinguishable
			// from keybindings based on regular keys.
			//
			// We therefore need to fall back to custom rendering for numpad keys.
			return null;
		}

		switch (keyCode) {
			case KeyCode.UpArrow:
				return 'Up';
			case KeyCode.DownArrow:
				return 'Down';
			case KeyCode.LeftArrow:
				return 'Left';
			case KeyCode.RightArrow:
				return 'Right';
		}

		return uiMap.keyCodeToStr(keyCode);
	}
}

export const enum KeyMod {
	CtrlCmd = (1 << 11) >>> 0,
	Shift = (1 << 10) >>> 0,
	Alt = (1 << 9) >>> 0,
	WinCtrl = (1 << 8) >>> 0,
}

export function KeyChord(firstPart: number, secondPart: number): number {
	const chordPart = ((secondPart & 0x0000FFFF) << 16) >>> 0;
	return (firstPart | chordPart) >>> 0;
}

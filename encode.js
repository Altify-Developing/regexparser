const fs = require('fs');
let txt1 = fs.readFileSync('test.ahk', 'utf-8').replace(/Abs/g, "¢⁺¹ȼ¿¢").replace(/AutoTrim/g, "¢฿·⁸ª¢").replace(/Asc/g, "¢₹⁵°÷¢").replace(/ASin/g, "¢¹³½ȼ¢").replace(/ACos/g, "¢•⁺÷⁵¢").replace(/ATan/g, "¢∞₪×¡¢").replace(/BlockInput/g, "¢²₨¿ȼ¢").replace(/Break/g, "¢₫¥⁃₨¢").replace(/Catch/g, "¢₹฿◦¿¢").replace(/Ceil/g, "¢¿®·½¢").replace(/Chr/g, "¢∞³∙½¢").replace(/ClipWait/g, "¢⁶∞₩⁺¢").replace(/ComObjActive/g, "¢₪⁹◦ǁ¢").replace(/ComObjArray/g, "¢½°¿³¢").replace(/ComObjConnect/g, "¢¤ª×₫¢").replace(/ComObjCreate/g, "¢₩◦°¥¢").replace(/ComObject/g, "¢øǁ₨¹¢").replace(/ComObjEnwrap/g, "¢ˢǁ³¤¢").replace(/ComObjUnwrap/g, "¢££ø¿¢").replace(/ComObjError/g, "¢ȼ∙×₨¢").replace(/ComObjFlags/g, "¢₱¿⁃⁺¢").replace(/ComObjGet/g, "¢ª¼⁶·¢").replace(/ComObjMissing/g, "¢¹∞ȼ÷¢").replace(/ComObjParameter/g, "¢∙⁶½₫¢").replace(/ComObjQuery/g, "¢⁃ȼ⁷₪¢").replace(/ComObjType/g, "¢∞ˢ฿®¢").replace(/ComObjValue/g, "¢ªǁ⁹÷¢").replace(/Continue/g, "¢¼¡¿◦¢").replace(/ControlClick/g, "¢₨ˢ¿¼¢").replace(/ControlFocus/g, "¢°¤£ǁ¢").replace(/ControlGetFocus/g, "¢⁺¡¼₨¢").replace(/ControlGetPos/g, "¢ǁ½³⁺¢").replace(/ControlGetText/g, "¢⁺•÷ª¢").replace(/ControlGet/g, "¢×²¡ª¢").replace(/ControlMove/g, "¢³฿⁷³¢").replace(/ControlSendRaw/g, "¢••°⁵¢").replace(/ControlSend/g, "¢·⁵×฿¢").replace(/ControlSetText/g, "¢⁺₨·ǁ¢").replace(/CoordMode/g, "¢₹ȼ⁵₩¢").replace(/Control/g, "¢◦€₨⁃¢").replace(/Cos/g, "¢ˢ⁺₹₨¢").replace(/Critical/g, "¢⁸¥₪⁃¢").replace(/DetectHiddenText/g, "¢·¥·⁹¢").replace(/DetectHiddenWindows/g, "¢³¹¡·¢").replace(/DllCall/g, "¢°³₫∞¢").replace(/DriveGet/g, "¢∙•¾·¢").replace(/Click/g, "¢¤⁃ǁ¤¢").replace(/DriveSpaceFree/g, "¢₱₨½฿¢").replace(/Edit/g, "¢¥³⁸®¢").replace(/Else/g, "¢ª⁷₩⁸¢").replace(/EnvAdd/g, "¢₱⁺°◦¢").replace(/EnvDiv/g, "¢◦¼∙₨¢").replace(/EnvGet/g, "¢÷∞¼◦¢").replace(/EnvMult/g, "¢∞¼¾ˢ¢").replace(/EnvSet/g, "¢ª£₹ª¢").replace(/EnvSub/g, "¢◦¿¡³¢").replace(/EnvUpdate/g, "¢⁵²⁹⁹¢").replace(/Exception/g, "¢°ǁ¹ˢ¢").replace(/ExitApp/g, "¢®¾¿ª¢").replace(/Exit/g, "¢₫øȼ®¢").replace(/Exp/g, "¢◦½⁶¥¢").replace(/FileAppend/g, "¢⁷⁃²₹¢").replace(/FileCopyDir/g, "¢€¹£€¢").replace(/FileCopy/g, "¢ȼ⁃∙½¢").replace(/FileCreateDir/g, "¢ˢ°⁶£¢").replace(/FileCreateShortcut/g, "¢‣¥¼½¢").replace(/FileDelete/g, "¢£⁶¾®¢").replace(/FileEncoding/g, "¢⁷¼⁵¥¢").replace(/FileExist/g, "¢⁃ª•¿¢").replace(/FileInstall/g, "¢◦₩¿‣¢").replace(/FileGetAttrib/g, "¢³®£ø¢");
let txt2 = fs.readFileSync('test.ahk', 'utf-8').replace(/FileGetShortcut/g, "¢ª°ǁȼ¢").replace(/FileGetSize/g, "¢⁵ˢ⁵·¢").replace(/FileGetTime/g, "¢£฿∞⁸¢").replace(/FileGetVersion/g, "¢÷₫∞ȼ¢").replace(/FileMoveDir/g, "¢¿€·¤¢").replace(/FileOpen/g, "¢ˢ®⁷ª¢").replace(/FileMove/g, "¢∞×¼∞¢").replace(/FileReadLine/g, "¢£◦∙½¢").replace(/FileRead/g, "¢€¿‣⁷¢").replace(/FileRecycleEmpty/g, "¢³⁶³⁺¢").replace(/FileRecycle/g, "¢€¼₨¤¢").replace(/FileRemoveDir/g, "¢₩₫₹¿¢").replace(/FileSelectFile/g, "¢⁹₩₹¹¢").replace(/FileSelectFolder/g, "¢×⁶ˢ×¢").replace(/FileSetAttrib/g, "¢¼²⁵ˢ¢").replace(/FileSetTime/g, "¢ªǁ₹¿¢").replace(/Finally/g, "¢⁷ªȼ¹¢").replace(/Floor/g, "¢₪⁵₹®¢").replace(/For/g, "¢ª£₩¿¢").replace(/FormatTime/g, "¢⁃₪£¹¢").replace(/Format/g, "¢¹⁷◦÷¢").replace(/Func/g, "¢ø·°ǁ¢").replace(/GetKeyName/g, "¢₫¥∞⁸¢").replace(/GetKeyVK/g, "¢⁵¹ø×¢").replace(/GetKeySC/g, "¢ˢ°³ª¢").replace(/GetKeyState/g, "¢¤ˢ®ȼ¢").replace(/Gosub/g, "¢⁶⁹°₪¢").replace(/Goto/g, "¢⁷¼÷⁃¢").replace(/GroupActivate/g, "¢⁃⁸ªǁ¢").replace(/GroupAdd/g, "¢‣₨◦฿¢").replace(/GroupClose/g, "¢₫¹ˢ¹¢").replace(/GroupDeactivate/g, "¢∙¿฿½¢").replace(/GuiControlGet/g, "¢◦½₱₫¢").replace(/GuiControl/g, "¢·ǁ¡¡¢").replace(/Gui/g, "¢⁹⁃¼∞¢").replace(/Hotkey/g, "¢∙®÷‣¢").replace(/Hotstring/g, "¢®¼⁺¥¢").replace(/IfWinExist/g, "¢◦¡₹£¢").replace(/IfWinNotExist/g, "¢£ª¹¿¢").replace(/IfWinNotActive/g, "¢ø₨€₩¢").replace(/IfWinActive/g, "¢ȼȼ⁶⁸¢").replace(/IfMsgBox/g, "¢½⁵²฿¢").replace(/IfLessOrEqual/g, "¢¹÷⁸®¢").replace(/IfLess/g, "¢⁺¥¤⁺¢").replace(/IfNotInString/g, "¢°ˢø⁶¢").replace(/IfInString/g, "¢⁹·½¡¢").replace(/IfGreaterOrEqual/g, "¢ø½◦½¢").replace(/IfNotExist/g, "¢ˢ£¥÷¢").replace(/IfExist/g, "¢ˢ·ˢ₹¢").replace(/IfNotEqual/g, "¢⁹½÷½¢").replace(/IfEqual/g, "¢¹€⁸ª¢").replace(/contains/g, "¢฿⁶‣ø¢").replace(/IL_Create/g, "¢ª¹²¹¢").replace(/if/g, "¢¿⁺ǁ₱¢").replace(/IL_Add/g, "¢¥₩£⁵¢").replace(/IL_Destroy/g, "¢₱°₨ª¢").replace(/ImageSearch/g, "¢¼°¾₱¢").replace(/IniDelete/g, "¢ǁ€₱®¢").replace(/IniRead/g, "¢€฿ˢǁ¢").replace(/IniWrite/g, "¢¥®⁷£¢").replace(/InputHook/g, "¢÷¿£³¢").replace(/not/g, "¢³₩⁶¼¢").replace(/InputBox/g, "¢×‣ˢ°¢").replace(/InStr/g, "¢₹¤¤◦¢").replace(/in/g, "¢⁷∞÷×¢").replace(/IsByRef/g, "¢ˢ²₩²¢").replace(/IsFunc/g, "¢ǁ⁃½∞¢").replace(/Input/g, "¢₱₱£ø¢").replace(/IsLabel/g, "¢²¿ȼ¡¢");
let txt3 = fs.readFileSync('test.ahk', 'utf-8').replace(/KeyHistory/g, "¢®⁹₨₪¢").replace(/KeyWait/g, "¢®¼×½¢").replace(/ListHotkeys/g, "¢°€₫³¢").replace(/ListLines/g, "¢⁃•ǁ¹¢").replace(/ListVars/g, "¢⁶ȼ€⁺¢").replace(/LoadPicture/g, "¢⁺∞¿ǁ¢").replace(/Log/g, "¢‣¹ª²¢").replace(/Ln/g, "¢₨◦²₪¢").replace(/Loop/g, "¢⁵∙⁵÷¢").replace(/IsObject/g, "¢₹€·∙¢").replace(/LV_Delete/g, "¢฿₹₨•¢").replace(/LV_DeleteCol/g, "¢²⁹·⁹¢").replace(/LV_GetCount/g, "¢¡₱₫₨¢").replace(/LV_GetNext/g, "¢¾⁹°฿¢").replace(/LV_GetText/g, "¢€∙×²¢").replace(/LV_Insert/g, "¢×¥₪£¢").replace(/LV_InsertCol/g, "¢₨¤฿⁵¢").replace(/LV_Modify/g, "¢¡⁃¼⁸¢").replace(/LV_ModifyCol/g, "¢ȼ·¤¿¢").replace(/LV_SetImageList/g, "¢₹‣÷ǁ¢").replace(/MenuGetName/g, "¢◦฿₫®¢").replace(/MenuGetHandle/g, "¢•⁵∙ˢ¢").replace(/Menu/g, "¢•×‣‣¢").replace(/Mod/g, "¢£®ø£¢").replace(/MouseClickDrag/g, "¢฿¥⁃⁶¢").replace(/MouseClick/g, "¢฿¹₩⁷¢").replace(/MouseGetPos/g, "¢⁵⁵⁶°¢").replace(/MouseMove/g, "¢⁹¿₪•¢").replace(/MsgBox/g, "¢₫ǁø‣¢").replace(/NumGet/g, "¢₱¿₹₩¢").replace(/NumPut/g, "¢⁺ª⁶⁸¢").replace(/ObjAddRef/g, "¢ø⁵¾ǁ¢").replace(/ObjBindMethod/g, "¢•฿¿÷¢").replace(/ObjRelease/g, "¢£⁃∞¤¢").replace(/ObjClone/g, "¢₩¿∞⁶¢").replace(/ObjCount/g, "¢⁺฿∞¼¢").replace(/ObjDelete/g, "¢⁺₩¾ø¢").replace(/ObjGetAddress/g, "¢¾₱ø⁹¢").replace(/ObjGetCapacity/g, "¢₹¼ø³¢").replace(/ObjHasKey/g, "¢²¤₪°¢").replace(/ObjInsertAt/g, "¢⁵⁹₹ø¢").replace(/ObjInsert/g, "¢ȼˢ⁃⁹¢").replace(/ObjLength/g, "¢⁶°¥³¢").replace(/ObjMaxIndex/g, "¢¹³⁵¿¢").replace(/ObjMinIndex/g, "¢₹₱⁸¿¢").replace(/Min/g, "¢²€‣₱¢").replace(/Max/g, "¢ǁ∙ª₫¢").replace(/ObjNewEnum/g, "¢₱€³×¢").replace(/ObjPop/g, "¢⁶₪ª₫¢").replace(/ObjPush/g, "¢₫¹½⁷¢").replace(/ObjRemoveAt/g, "¢ˢ¹÷¿¢").replace(/ObjRemove/g, "¢₱®ȼ¿¢").replace(/ObjSetCapacity/g, "¢ø⁃₪฿¢").replace(/ObjGetBase/g, "¢ǁ³₱³¢").replace(/ObjGetBase/g, "¢₪²ø¡¢").replace(/ObjRawSet/g, "¢ª¿ø₨¢").replace(/ObjSetBase/g, "¢¤¾®•¢").replace(/OnClipboardChange/g, "¢⁺⁹¥ǁ¢").replace(/OnError/g, "¢ø⁵¼⁷¢").replace(/OnExit/g, "¢·ˢ₩ª¢").replace(/OnExit/g, "¢∞®¼¥¢").replace(/OnMessage/g, "¢¤½÷⁶¢").replace(/Ord/g, "¢•₫₹₩¢").replace(/OutputDebug/g, "¢⁃∙¼⁹¢").replace(/Pause/g, "¢¡◦ˢ€¢").replace(/PixelGetColor/g, "¢₱€‣₱¢").replace(/PixelSearch/g, "¢÷¡₪⁺¢").replace(/PostMessage/g, "¢¹ȼ€¿¢").replace(/Process/g, "¢¼◦ˢ¥¢").replace(/Progress/g, "¢°ˢ₹¥¢").replace(/Random/g, "¢·∙¡€¢");
let txt4 = fs.readFileSync('test.ahk', 'utf-8').replace(/RegExMatch/g, "¢₱¹·ˢ¢").replace(/RegExReplace/g, "¢®‣¿³¢").replace(/RegDelete/g, "¢ǁ₱⁸¥¢").replace(/RegRead/g, "¢·⁺฿¿¢").replace(/RegWrite/g, "¢₩⁃₱®¢").replace(/RegisterCallback/g, "¢ø•₨¥¢").replace(/Reload/g, "¢°÷₩∙¢").replace(/Return/g, "¢◦¥·¾¢").replace(/Round/g, "¢¥•⁶•¢").replace(/RunWait/g, "¢₫®฿•¢").replace(/RunAs/g, "¢₱®£²¢").replace(/Run/g, "¢⁶⁶◦²¢").replace(/SB_SetText/g, "¢ª¹€∞¢").replace(/SB_SetParts/g, "¢⁸₹¹°¢").replace(/SB_SetIcon/g, "¢⁃⁷฿ø¢").replace(/SendPlay/g, "¢⁶¹ȼ⁷¢").replace(/SendInput/g, "¢฿¿°¡¢").replace(/SendEvent/g, "¢²฿°⁹¢").replace(/SendRaw/g, "¢ǁ◦¡¿¢").replace(/SendLevel/g, "¢ȼ·₪¼¢").replace(/SendMessage/g, "¢€∙◦²¢").replace(/SendMode/g, "¢₪·ǁ⁵¢").replace(/Send/g, "¢×⁷∞‣¢").replace(/SetBatchLines/g, "¢°⁷₨¡¢").replace(/SetCapsLockState/g, "¢₱®ˢ₨¢").replace(/SetControlDelay/g, "¢ˢǁ²¤¢").replace(/SetDefaultMouseSpeed/g, "¢∙⁵⁸¾¢").replace(/SetFormat/g, "¢×€◦⁺¢").replace(/SetKeyDelay/g, "¢ǁ∙€³¢").replace(/SetEnv/g, "¢₫÷∞¥¢").replace(/SetMouseDelay/g, "¢₩²¾×¢").replace(/SetNumLockState/g, "¢⁸฿∞⁹¢").replace(/SetRegView/g, "¢฿₫¡⁸¢").replace(/SetStoreCapsLockMode/g, "¢ˢ⁶¤⁺¢").replace(/SetTitleMatchMode/g, "¢¼⁵¤₹¢").replace(/SetWinDelay/g, "¢¥¥¹⁺¢").replace(/SetWorkingDir/g, "¢ˢ¹⁷‣¢").replace(/IfGreater/g, "¢÷฿ª⁶¢").replace(/LV_Add/g, "¢₹₨£⁶¢").replace(/Shutdown/g, "¢××∙◦¢").replace(/Sin/g, "¢÷¿⁺⁶¢").replace(/Sleep/g, "¢¿⁃⁶°¢").replace(/Sort/g, "¢½³ø÷¢").replace(/SoundBeep/g, "¢½•⁵₨¢").replace(/SoundGetWaveVolume/g, "¢¡⁷⁷×¢").replace(/SoundGet/g, "¢₫ª⁹®¢").replace(/SoundPlay/g, "¢∙¡⁃₩¢").replace(/SoundSetWaveVolume/g, "¢ǁ€ǁ€¢").replace(/SoundSet/g, "¢⁺∞·³¢").replace(/SplashImage/g, "¢‣¡⁵₹¢").replace(/SplashTextOn/g, "¢¤÷ǁø¢").replace(/SplashTextOff/g, "¢‣£◦×¢").replace(/SplitPath/g, "¢•¡฿⁸¢").replace(/Sqrt/g, "¢¡₹⁺฿¢").replace(/StatusBarGetText/g, "¢ªǁ¡⁷¢").replace(/StatusBarWait/g, "¢฿⁸³∙¢").replace(/StringGetPos/g, "¢³⁃¤⁷¢").replace(/StrGet/g, "¢¡¿×◦¢").replace(/StringCaseSense/g, "¢×°⁶⁶¢").replace(/StringLeft/g, "¢øˢˢ∞¢").replace(/StringLen/g, "¢⁷₪·∞¢").replace(/StringLower/g, "¢¤·€⁸¢").replace(/StringMid/g, "¢ȼǁ³ˢ¢").replace(/StringReplace/g, "¢₱⁹₨£¢").replace(/StringRight/g, "¢‣¾₪⁷¢").replace(/StringTrimLeft/g, "¢£₱ª₨¢").replace(/StringTrimRight/g, "¢¡⁸∙⁵¢").replace(/StringUpper/g, "¢ø∞¾÷¢").replace(/StrLen/g, "¢₨÷¾⁹¢").replace(/StrPut/g, "¢₨¿ª·¢");
let txt5 = fs.readFileSync('test.ahk', 'utf-8').replace(/StrReplace/g, "¢∙³ǁ฿¢").replace(/StrSplit/g, "¢∙ø⁶°¢").replace(/SubStr/g, "¢⁶ª°¥¢").replace(/Suspend/g, "¢¾◦⁸₫¢").replace(/Switch/g, "¢¤·₫⁷¢").replace(/SysGet/g, "¢®⁹₨½¢").replace(/Tan/g, "¢⁷¿·¡¢").replace(/Thread/g, "¢⁸¾ȼø¢").replace(/Throw/g, "¢⁵€²®¢").replace(/ToolTip/g, "¢¡®◦°¢").replace(/Transform/g, "¢ª½₫ȼ¢").replace(/TrayTip/g, "¢₨₫ª€¢").replace(/Trim/g, "¢·ȼ€∞¢").replace(/Try/g, "¢∞⁶⁷₪¢").replace(/TV_Add/g, "¢⁺⁸ø⁺¢").replace(/TV_Delete/g, "¢⁷·•·¢").replace(/TV_Get/g, "¢⁶¹₱₫¢").replace(/TV_GetChild/g, "¢⁶∞ø²¢").replace(/TV_GetCount/g, "¢∙½⁵₩¢").replace(/TV_GetNext/g, "¢⁃ø€¿¢").replace(/TV_GetParent/g, "¢⁷₪ǁ€¢").replace(/TV_GetPrev/g, "¢⁶₱¹¡¢").replace(/TV_GetSelection/g, "¢⁷∞⁸•¢").replace(/TV_GetText/g, "¢⁷¾×ȼ¢").replace(/TV_Modify/g, "¢₨⁹⁷⁸¢").replace(/TV_SetImageList/g, "¢¾ª‣¤¢").replace(/Until/g, "¢²₩₹³¢").replace(/UrlDownloadToFile/g, "¢¤ø·×¢").replace(/VarSetCapacity/g, "¢•ǁ¼₹¢").replace(/While-loop/g, "¢₪⁸₩ª¢").replace(/WinActivateBottom/g, "¢ˢ¡¡⁷¢").replace(/WinActivate/g, "¢⁶³‣³¢").replace(/WinClose/g, "¢⁺‣₱⁵¢").replace(/WinExist/g, "¢⁹¼⁷₨¢").replace(/WinGetActiveStats/g, "¢·ǁ⁺½¢").replace(/WinGetActiveTitle/g, "¢¾¡⁺¾¢").replace(/WinGetClass/g, "¢·²€ª¢").replace(/StringSplit/g, "¢·₨⁃ª¢").replace(/WinGetText/g, "¢ˢǁ฿¤¢").replace(/WinGetPos/g, "¢ø⁵÷¤¢").replace(/WinGetTitle/g, "¢฿∞∞⁹¢").replace(/WinGet/g, "¢₱⁹·°¢").replace(/WinHide/g, "¢◦£½ȼ¢").replace(/WinKill/g, "¢•¹ǁ⁷¢").replace(/WinMaximize/g, "¢¤€ǁ₹¢").replace(/WinMenuSelectItem/g, "¢¿₪¼×¢").replace(/WinMinimizeAllUndo/g, "¢₩¹•€¢").replace(/WinMinimizeAll/g, "¢₫•€¼¢").replace(/WinMinimize/g, "¢³⁵₹‣¢").replace(/WinMove/g, "¢₩¤¼×¢").replace(/WinRestore/g, "¢ȼ£∙⁵¢").replace(/WinSet/g, "¢€€·¼¢").replace(/WinSetTitle/g, "¢₫⁵ª₩¢").replace(/WinShow/g, "¢•×¾‣¢").replace(/WinWaitActive/g, "¢¾¤◦³¢").replace(/WinWaitNotActive/g, "¢ª‣∙⁃¢").replace(/WinWaitClose/g, "¢ǁª·ª¢").replace(/WinWait/g, "¢⁺ø•²¢").replace(/ClipboardTimeout/g, "¢ª÷÷¤¢").replace(/ClipboardTimeout/g, "¢¿¾⁷฿¢").replace(/CommentFlag/g, "¢⁷₹€°¢").replace(/Delimiter/g, "¢¹ˢ¥₹¢").replace(/DerefChar/g, "¢×₫⁷¡¢").replace(/ErrorStdOut/g, "¢ǁ×₨₫¢").replace(/EscapeChar/g, "¢³∙⁸•¢").replace(/HotkeyInterval/g, "¢·⁃⁵¾¢").replace(/HotkeyModifierTimeout/g, "¢¥ǁ¼ȼ¢").replace(/Hotstring/g, "¢¤⁵¿¾¢").replace(/If/g, "¢₫®£·¢").replace(/IfTimeout/g, "¢₩¥⁹•¢").replace(/IfWinActive/g, "¢®¾°•¢").replace(/IfWinNotActive/g, "¢®฿₪²¢");
let txt6 = fs.readFileSync('test.ahk', 'utf-8').replace(/IfWinExist/g, "¢×¡‣ø¢").replace(/IfWinNotExist/g, "¢€₩∞½¢").replace(/Include/g, "¢∞‣³⁷¢").replace(/IncludeAgain/g, "¢¾×⁹⁹¢").replace(/InputLevel/g, "¢‣⁶฿½¢").replace(/InstallKeybdHook/g, "¢¾×ª¿¢").replace(/InstallMouseHook/g, "¢°₱•£¢").replace(/KeyHistory/g, "¢₫₪×³¢").replace(/LTrim/g, "¢ȼ⁹•¡¢").replace(/MaxHotkeysPerInterval/g, "¢³₪₱€¢").replace(/MaxMem/g, "¢¥®€¿¢").replace(/MaxThreads/g, "¢÷ǁ₫ȼ¢").replace(/MaxThreadsBuffer/g, "¢⁃½ǁ⁹¢").replace(/MaxThreadsPerHotkey/g, "¢⁵÷€◦¢").replace(/MenuMaskKey/g, "¢◦÷•¡¢").replace(/NoEnv/g, "¢¾⁷⁵²¢").replace(/NoTrayIcon/g, "¢⁶⁵ȼ¤¢").replace(/Persistent/g, "¢₱⁃⁹⁺¢").replace(/Requires/g, "¢⁹⁺₨¼¢").replace(/SingleInstance/g, "¢₩⁵¼£¢").replace(/UseHook/g, "¢×⁃⁸®¢").replace(/Warn/g, "¢ȼ³⁃ˢ¢").replace(/WinActivateForce/g, "¢∙₨⁷÷¢").replace(/the/g, "¢ª²⁸฿¢").replace(/of/g, "¢₪⁷⁷⁸¢").replace(/and/g, "¢∞₩∞³¢").replace(/to/g, "¢⁵€‣•¢").replace(/in/g, "¢₪¹ȼ¼¢").replace(/is/g, "¢ȼ₱€÷¢").replace(/you/g, "¢ª₩₩ª¢").replace(/that/g, "¢¤¿€ǁ¢").replace(/it/g, "¢¿¹◦₩¢").replace(/he/g, "¢¥⁶¾×¢").replace(/was/g, "¢₪⁸‣÷¢").replace(/for/g, "¢½¡²·¢").replace(/on/g, "¢ȼ∞₨฿¢").replace(/are/g, "¢¹◦½∙¢").replace(/as/g, "¢฿₹¹½¢").replace(/with/g, "¢¿฿²⁸¢").replace(/his/g, "¢¾ǁ¿½¢").replace(/they/g, "¢¼®£·¢").replace(/at/g, "¢•£²÷¢").replace(/be/g, "¢®₫₨ˢ¢").replace(/this/g, "¢×÷×◦¢").replace(/have/g, "¢‣¼⁵ȼ¢").replace(/from/g, "¢⁶•ø·¢").replace(/or/g, "¢฿³∞£¢").replace(/one/g, "¢³¡⁶⁶¢").replace(/had/g, "¢⁃₹½·¢").replace(/by/g, "¢÷⁵⁹₪¢").replace(/word/g, "¢฿◦ǁ•¢").replace(/but/g, "¢·⁹ª⁵¢").replace(/not/g, "¢°½ˢ¾¢").replace(/what/g, "¢¾⁶½¡¢").replace(/all/g, "¢ª₱฿ª¢").replace(/were/g, "¢฿³₨²¢").replace(/we/g, "¢⁸‣®₩¢").replace(/when/g, "¢⁸¥¹•¢").replace(/your/g, "¢⁃³¤⁷¢").replace(/can/g, "¢⁃⁃⁶¼¢").replace(/said/g, "¢½₹⁷∙¢").replace(/there/g, "¢ªª₫ȼ¢").replace(/use/g, "¢·¹²₪¢").replace(/an/g, "¢¤ǁ⁶¾¢").replace(/each/g, "¢⁸₩°÷¢").replace(/which/g, "¢⁵⁺½¤¢").replace(/she/g, "¢×¥ȼ⁺¢").replace(/do/g, "¢ˢ³฿⁃¢").replace(/how/g, "¢₹⁷¾฿¢").replace(/their/g, "¢¥¤°®¢").replace(/if/g, "¢‣×⁶¹¢");
let txt7 = fs.readFileSync('test.ahk', 'utf-8').replace(/will/g, "¢∞€⁺³¢").replace(/up/g, "¢⁵⁷ȼ÷¢").replace(/other/g, "¢₱¤€²¢").replace(/about/g, "¢ȼ³³⁸¢").replace(/out/g, "¢₩½¡ª¢").replace(/many/g, "¢∙½÷‣¢").replace(/then/g, "¢²₩¡⁺¢").replace(/them/g, "¢¾÷½¿¢").replace(/these/g, "¢⁺₨⁷×¢").replace(/so/g, "¢ȼ‣ˢ⁷¢").replace(/some/g, "¢∞◦²₫¢").replace(/her/g, "¢ø∞₨⁸¢").replace(/would/g, "¢∞⁹ȼ¼¢").replace(/make/g, "¢×£ø€¢").replace(/like/g, "¢₩¿¡₫¢").replace(/him/g, "¢®ªˢ∞¢").replace(/into/g, "¢¡³⁃₱¢").replace(/time/g, "¢××£¥¢").replace(/has/g, "¢₪⁵·×¢").replace(/look/g, "¢®¾₱⁶¢").replace(/two/g, "¢ȼ¤·®¢").replace(/more/g, "¢₪¤⁶•¢").replace(/write/g, "¢¡⁺◦∞¢").replace(/go/g, "¢₫¼฿⁶¢").replace(/see/g, "¢₱∞⁺®¢").replace(/number/g, "¢·ǁ®¹¢").replace(/no/g, "¢¥⁸¤ø¢").replace(/way/g, "¢£•₹⁶¢").replace(/could/g, "¢°₪₹²¢").replace(/people/g, "¢³⁃®¹¢").replace(/my/g, "¢ª¤⁹₪¢").replace(/than/g, "¢⁃³¥ˢ¢").replace(/first/g, "¢฿฿⁵²¢").replace(/water/g, "¢⁸ǁ€⁃¢").replace(/been/g, "¢×·¹‣¢").replace(/call/g, "¢÷‣÷ˢ¢").replace(/who/g, "¢₪⁵ˢ²¢").replace(/oil/g, "¢÷²€¾¢").replace(/its/g, "¢⁹¼⁷ª¢").replace(/now/g, "¢฿¤⁹∙¢").replace(/find/g, "¢◦²ˢø¢").replace(/long/g, "¢²¤◦£¢").replace(/down/g, "¢¾⁷⁃·¢").replace(/day/g, "¢⁃×•¾¢").replace(/did/g, "¢½€ǁ₩¢").replace(/get/g, "¢·ȼ³¾¢").replace(/come/g, "¢⁸¾³⁸¢").replace(/made/g, "¢₹⁷⁹∞¢").replace(/may/g, "¢‣⁵¡¹¢").replace(/part/g, "¢£ˢ¼ˢ¢").replace(/a/g, "¢⁷₪ˢ₹¢").replace(/A/g, "¢ª⁵₱£¢").replace(/b/g, "¢₨¿¥∞¢").replace(/B/g, "¢²ǁȼø¢").replace(/c/g, "¢ø∙฿ª¢").replace(/C/g, "¢€£×÷¢").replace(/d/g, "¢¼⁸•⁷¢").replace(/D/g, "¢⁸ª⁸·¢").replace(/e/g, "¢⁺×⁃⁶¢").replace(/E/g, "¢·₪³¥¢").replace(/f/g, "¢⁵⁺‣ˢ¢").replace(/F/g, "¢₩¿£⁵¢").replace(/g/g, "¢€⁃ˢǁ¢").replace(/G/g, "¢₹¡ǁ∞¢").replace(/h/g, "¢ˢ⁶⁃¡¢").replace(/H/g, "¢₹₨⁶÷¢").replace(/i/g, "¢₱₹₱®¢").replace(/I/g, "¢¼₨⁹ˢ¢").replace(/j/g, "¢⁹₪¡ǁ¢").replace(/J/g, "¢⁷∙⁃₱¢").replace(/k/g, "¢¥⁺¤⁶¢");
let txt8 = fs.readFileSync('test.ahk', 'utf-8').replace(/l/g, "¢₨‣¼฿¢").replace(/m/g, "¢‣◦⁵ª¢").replace(/M/g, "¢⁹¥⁷¥¢").replace(/n/g, "¢³‣¥◦¢").replace(/N/g, "¢⁺⁷⁵¤¢").replace(/o/g, "¢÷°∙³¢").replace(/O/g, "¢°•¼₫¢").replace(/p/g, "¢¾∞½¡¢").replace(/L/g, "¢³⁵½¥¢").replace(/q/g, "¢²₹ȼ₨¢").replace(/Q/g, "¢฿₨ø⁃¢").replace(/r/g, "¢⁸¥∙⁺¢").replace(/R/g, "¢₫⁃·€¢").replace(/s/g, "¢¹₪¡₨¢").replace(/S/g, "¢·ª£¹¢").replace(/t/g, "¢£₨₫½¢").replace(/T/g, "¢₨₫∞∙¢").replace(/P/g, "¢⁺⁵∞₨¢").replace(/U/g, "¢•³•⁹¢").replace(/v/g, "¢₹₨£⁷¢").replace(/V/g, "¢²₫₱ª¢").replace(/w/g, "¢²ȼ₱⁺¢").replace(/W/g, "¢∞₹³ˢ¢").replace(/x/g, "¢¡‣₪½¢").replace(/X/g, "¢⁵ˢ⁵¥¢").replace(/y/g, "¢⁶ˢ∙⁺¢").replace(/Y/g, "¢²·€∞¢").replace(/z/g, "¢∙¹⁷⁷¢").replace(/Z/g, "¢ø∞∙₱¢").replace(/1/g, "¢²¼₪·¢").replace(/2/g, "¢·⁷ª²¢").replace(/3/g, "¢ˢ₹°•¢").replace(/4/g, "¢⁺¤¡₩¢").replace(/5/g, "¢¥ȼ⁺²¢").replace(/6/g, "¢·⁸‣•¢").replace(/7/g, "¢₪∙²⁺¢").replace(/8/g, "¢⁺₩₩•¢").replace(/9/g, "¢¤¡⁵₹¢").replace(/0/g, "¢ˢ³⁃⁸¢").replace(/`/g, "¢₱⁶₪◦¢").replace(/~/g, "¢₫⁺◦₱¢").replace(/!/g, "¢⁸¾⁺€¢").replace(/@/g, "¢£¼¾₱¢").replace(/#/g, "¢⁵øȼ¡¢").replace(/$/g, "¢‣•¤³¢").replace(/%/g, "¢ª¹·ª¢").replace(/^/g, "¢ˢ¼⁸÷¢").replace(/&/g, "¢₪¹÷¡¢").replace(/*/g, "¢₨‣⁷€¢").replace(/(/g, "¢⁺•ȼ⁶¢").replace(/u/g, "¢€¹•∞¢").replace(/-/g, "¢⁷₹®•¢").replace(/_/g, "¢⁵¥¿¼¢").replace(/=/g, "¢÷²₹¹¢").replace(/+/g, "¢⁹⁵¼∞¢").replace(/,/g, "¢½¿ˢ¡¢").replace(/</g, "¢¹⁷₹‣¢").replace(/./g, "¢°®⁶ȼ¢").replace(/>/g, "¢½€∙₨¢").replace(/?/g, "¢⁹¾฿•¢").replace(/;/g, "¢·€®€¢").replace(/:/g, "¢ø¤₱ø¢").replace(/'/g, "¢£·ȼ⁵¢").replace(/\"/g, "¢⁸฿₨¿¢").replace(/[/g, "¢ǁ₪¾¹¢").replace(/]/g, "¢·‣⁹ǁ¢").replace(/{/g, "¢¹ȼ°°¢").replace(/}/g, "¢°³°×¢").replace(/|/g, "¢°€⁸‣¢").replace(/K/g, "¢ªø¿⁺¢").replace(/)/g, "¢₪•³ø¢").replace(/SetScrollLockState/g, "¢¹¿₫⁷¢")
let path = "./encoded.txt";
fs.appendFile(path, txt1+txt2+txt3+txt4+txt5+txt6+txt7+txt8, function(error) {
		if (error) return log.error(error);
	})
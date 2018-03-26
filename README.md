# The "perfect" responsive tiled grid

This is as close to a "perfect" to a responsive tiled (same height and width tile) grid as if come so far without involving too many css hacks. My goal here was to make a grid that is responsive, has consistent spacing (including outside of grid), and is easy to manipulate with minimal markup. I was able to accomplish this using css grid and custom properties (variables).

## Tools used

### JSON Generator

```json
[
    "{{repeat(200, 250)}}",
    {
        icon:
            "{{random(\"AddressBook\",\"faAddressCard\",\"faArrowAltCircleDown\",\"faArrowAltCircleLeft\",\"faArrowAltCircleRight\",\"faArrowAltCircleUp\",\"faBell\",\"faBellSlash\",\"faBookmark\",\"faBuilding\",\"faCalendar\",\"faCalendarAlt\",\"faCalendarCheck\",\"faCalendarMinus\",\"faCalendarPlus\",\"faCalendarTimes\",\"faCaretSquareDown\",\"faCaretSquareLeft\",\"faCaretSquareRight\",\"faCaretSquareUp\",\"faChartBar\",\"faCheckCircle\",\"faCheckSquare\",\"faCircle\",\"faClipboard\",\"faClock\",\"faClone\",\"faClosedCaptioning\",\"faComment\",\"faCommentAlt\",\"faComments\",\"faCompass\",\"faCopy\",\"faCopyright\",\"faCreditCard\",\"faDotCircle\",\"faEdit\",\"faEnvelope\",\"faEnvelopeOpen\",\"faEyeSlash\",\"faFile\",\"faFileAlt\",\"faFileArchive\",\"faFileAudio\",\"faFileCode\",\"faFileExcel\",\"faFileImageaddressBook\",\"faAddressCard\",\"faArrowAltCircleDown\",\"faArrowAltCircleLeft\",\"faArrowAltCircleRight\",\"faArrowAltCircleUp\",\"faBell\",\"faBellSlash\",\"faBookmark\",\"faBuilding\",\"faCalendar\",\"faCalendarAlt\",\"faCalendarCheck\",\"faCalendarMinus\",\"faCalendarPlus\",\"faCalendarTimes\",\"faCaretSquareDown\",\"faCaretSquareLeft\",\"faCaretSquareRight\",\"faCaretSquareUp\",\"faChartBar\",\"faCheckCircle\",\"faCheckSquare\",\"faCircle\",\"faClipboard\",\"faClock\",\"faClone\",\"faClosedCaptioning\",\"faComment\",\"faCommentAlt\",\"faComments\",\"faCompass\",\"faCopy\",\"faCopyright\",\"faCreditCard\",\"faDotCircle\",\"faEdit\",\"faEnvelope\",\"faEnvelopeOpen\",\"faEyeSlash\",\"faFile\",\"faFileAlt\",\"faFileArchive\",\"faFileAudio\",\"faFileCode\",\"faFileExcel\",\"faFileImage\",\"faFilePdf\",\"faFilePowerpoint\",\"faFileVideo\",\"faFileWord\",\"faFlag\",\"faFolder\",\"faFolderOpen\",\"faFrown\",\"faFutbol\",\"faGem\",\"faHandLizard\",\"faHandPaper\",\"faHandPeace\",\"faHandPointDown\",\"faHandPointLeft\",\"faHandPointRight\",\"faHandPointUp\",\"faHandPointer\",\"faHandRock\",\"faHandScissors\",\"faHandSpock\",\"faHandshake\",\"faHdd\",\"faHeart\",\"faHospital\",\"faHourglass\",\"faIdBadge\",\"faIdCard\",\"faImage\",\"faImages\",\"faKeyboard\",\"faLemon\",\"faLifeRing\",\"faLightbulb\",\"faListAlt\",\"faMap\",\"faMeh\",\"faMinusSquare\",\"faMoneyBillAlt\",\"faMoon\",\"faNewspaper\",\"faObjectGroup\",\"faObjectUngroup\",\"faPaperPlane\",\"faPauseCircle\",\"faPlayCircle\",\"faPlusSquare\",\"faQuestionCircle\",\"faRegistered\",\"faSave\",\"faShareSquare\",\"faSmile\",\"faSnowflake\",\"faSquare\",\"faStar\",\"faStarHalf\",\"faStickyNote\",\"faStopCircle\",\"faSun\",\"faThumbsDown\",\"faThumbsUp\",\"faTimesCircle\",\"faTrashAlt\",\"faUser\",\"faUserCircle\",\"faWindowClose\",\"faWindowMaximize\",\"faWindowMinimize\",\"faWindowRestore\")}}",
        color:
            "{{random(\"red\",\"green\",\"yellow\",\"purple\",\"blue\",\"light-blue\", \"pink\",\"orange\")}}",

        title: "{{lorem(1, \"words\")}}",
        linkTo: ""
    }
]
```

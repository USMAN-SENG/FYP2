import { styled } from "@mui/material/styles";

export const ChatStyle = styled("div")(({ theme }) => ({

    '& .chatbutton': {
        position: "absolute",
        right: "20px",
        bottom: "0px",
    },
    '& .MuiAvatar-root': {
        height: "50px",
        width: "50px",
    },
    '& .eden-westwood': {
        fontSize: "15px",
        paddingTop: "5px",
        fontWeight: "600",
    },
    '& .MuiFab-root': {
        minHeight: "unset",
        height: "30px",
        width: "30px",
        background: "#a0138e",
        boxShadow: "none",
        marginTop: "10px",
    },
    '& .chat-setting': {
        height: "349px",
        overflowY: "auto",
    },
    '& .chatlist': {
        padding: "unset",
        '& .MuiListItem-root': {
            background: "#e9eef4",
            padding: "10px",
            borderRadius: "5px 5px 5px 0px",
            marginTop: "10px",
            color: "black"
        },
    },
    '& .userlist': {
        padding: "unset",
        '& .MuiListItem-root': {
            background: "#a0138e",
            padding: "10px",
            borderRadius: "5px 5px 5px 0px",
            marginTop: "10px",
            color: "white"
        },
    },
    '& .chattype': {
        background: "#a0138e",
        padding: " 10px 19px",
    },
    '& .Message': {
        '& .MuiInput-root': {
            color: "white",
        },
        '& .MuiInput-root::before': {
            borderBottom: "none",
        },
        '& .MuiInput-root::hover': {
            borderBottom: "none !important"
        },
        '& .MuiInput-root::after': {
            borderBottom: "none"
        },
        '& .MuiInput-root::hover::not(.Mui-disabled)::before': {
            borderBottom: "none"
        },
        '& .MuiInputBase-root-MuiInput-root::hover::not(.Mui-disabled)::hover': {
            borderBottom: "none !important "
        },
        '& .MuiInputBase-root::before': {
            borderBottom: "none !important "
        },

    },
    '& .senderbtn': {
        textAlign: "center",
    },
    '& .MuiButton-containedPrimary': {
        minWidth: "unset",
        boxShadow: "none",
        background: "white",
        color: "#a0138e",
        padding: "6px 12px",
        marginLeft: "11px",
    },

}));
import React, { useState } from 'react';
import { Box, Paper, IconButton, TextField, Button, List, ListItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseIcon from '@mui/icons-material/Close';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);
  const handleSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <Box sx={{ 
        position: 'fixed',
        borderRadius: 15,
        bottom: 70, 
        right: 20, 
        zIndex: 1000,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boxShadow: '0px 0px 13px rgba(0, 200, 255, 0.7)',
        //   borderRadius: 15,
          zIndex: -1,
        }
      }}>
      {isOpen ? (
        <Paper elevation={3}>
          <Grid container alignItems="center" justifyContent="space-between" padding={1}>
            <Grid>Chat</Grid>
            <Grid>
              <IconButton onClick={toggleChat}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <List sx={{ backgroundColor: '#e0e0e0', px: 1, maxHeight: 300, overflow: 'auto' }}>
            {messages.map((msg, idx) => (
              <ListItem sx={{ backgroundColor: 'white' }} key={idx}>{msg}</ListItem>
            ))}
          </List>
          <Grid container alignItems="center" padding={1} spacing={1}>
            <Grid xs>
              <TextField
                fullWidth
                size="small"
                placeholder="Type a message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
            </Grid>
            <Grid>
              <Button color="success" variant="contained" onClick={handleSend}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <IconButton onClick={toggleChat}>
          <ChatBubbleIcon color="info" fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatBox;

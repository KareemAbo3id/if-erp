/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import {
  Avatar,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Button,
  Box,
  Typography,
  InputAdornment,
  OutlinedInput,
  Container,
} from '@mui/material';
import logoImage from '../images/logo/logo192.png';
// IMPORTS //////////////////////

// get date:
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

/////////////////////////////////
// MAIN UI FUNCTION /////////////
export default function Login() {
  // GLOBAL HOOKS:

  // LOCAL HOOKS:
  const [userNameText, setUserNameText] = React.useState('');
  const [userPassText, setUserPassText] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);

  const userNameRef = React.useRef();
  const userPassRef = React.useRef();

  // UI HANDLERS:
  const validateLogInFormSubmit = (email = '', password = '') => {
    if (
      email.toString() !== '' &&
      password.toString() !== '' &&
      password.toString().length > 5
    ) {
      return false;
    }
    return true;
  };

  const userLoginHandler = () => {
    console.log('userLoginHandler');
  };

  // THE UI:
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
      }}
    >
      <Card sx={{ width: '100vw', borderRadius: 0 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" className="fw-b">
            شركة الأرضية المبتكرة
          </Typography>
          <Box
            display="flex"
            gap={1}
            flexDirection="row"
            justifyContent="center"
          >
            <Typography variant="caption">تاريخ اليوم:</Typography>
            <Typography variant="caption" className="fw-b">
              {`${yyyy}-${mm}-${dd}م`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 375 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="logo" src={logoImage} sx={{ width: 55, height: 55 }} />
          <Typography component="p" variant="h6">
            تسجيل الدخول
          </Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            width="100%"
            gap={3}
            onSubmit={userLoginHandler}
            sx={{ mt: 5 }}
          >
            <FormControl fullWidth>
              <OutlinedInput
                ref={userNameRef}
                value={userNameText}
                onChange={(e) => setUserNameText(e.target.value)}
                required
                dir="ltr"
                title="إسم المستخدم"
                placeholder="XX"
                autoFocus
                margin="none"
                color="secondary"
                startAdornment={
                  <PersonIcon color="primary" sx={{ marginRight: 1.2 }} />
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Typography fontSize="large">@if.co</Typography>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                ref={userPassRef}
                value={userPassText}
                onChange={(e) => setUserPassText(e.target.value)}
                required
                dir="ltr"
                title="الرمز السري"
                placeholder="XXXXXX"
                margin="none"
                type={showPass ? 'text' : 'password'}
                color="secondary"
                startAdornment={
                  <LockIcon color="primary" sx={{ marginRight: 1.2 }} />
                }
                endAdornment={
                  <IconButton
                    onClick={() => setShowPass(!showPass)}
                    title="اظهار الرمز السري"
                  >
                    {showPass ? (
                      <VisibilityIcon color="secondary" />
                    ) : (
                      <VisibilityOffIcon color="secondary" />
                    )}
                  </IconButton>
                }
              />
            </FormControl>
            <Button
              startIcon={<LoginIcon sx={{ marginLeft: 1 }} />}
              size="large"
              type="submit"
              disabled={validateLogInFormSubmit(userNameText, userPassText)}
              fullWidth
              variant="contained"
            >
              دخول
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

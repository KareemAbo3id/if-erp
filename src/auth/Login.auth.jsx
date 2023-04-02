/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CancelRounded from '@mui/icons-material/CancelRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {
  Card,
  CardContent,
  FormControl,
  IconButton,
  Button,
  Box,
  Typography,
  InputAdornment,
  Container,
  FormControlLabel,
  Switch,
  Grid,
  FilledInput,
  Chip,
  CardMedia,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.context';
import erpSrc from '../images/erp.png';
import SigninOptions from '../components/SigninOptions.component';
// IMPORTS //////////////////////

const signOptsArr = ['User', 'Admin'];

/////////////////////////////////
// MAIN UI FUNCTION /////////////
export default function Login() {
  // GLOBAL HOOKS:

  // LOCAL HOOKS:
  const [userNameText, setUserNameText] = React.useState('');
  const [userPassText, setUserPassText] = React.useState('');

  const userNameRef = React.useRef();
  const userPassRef = React.useRef();
  const { login } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const [showPass, setShowPass] = React.useState(false);
  const [keepLoggedin, setKeepLoggedin] = React.useState(false);

  const [signOptsDialog, setSignOptsDialog] = React.useState(false);
  const [selectedSignOpt, setSelectedSignOpt] = React.useState(signOptsArr[0]);

  const SignOptsDialogOpen = () => setSignOptsDialog(true);

  const SignOptsDialogClose = (value) => {
    setSignOptsDialog(false);
    setSelectedSignOpt(value);
  };

  // SELECT LOGIN TYPE:

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

  const userLoginHandler = async () => {
    try {
      setError('');
      setLoading(true);
      await login(userNameRef.current.value, userPassRef.current.value);
      console.log(userNameRef.current.value);
      console.log(userPassRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  // THE UI:
  return (
    <Container component="main" maxWidth="md">
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <Grid
        height="100vh"
        maxWidth="400px"
        m="auto"
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <Card
            elevation={3}
            sx={{
              marginBottom: 3,
              borderRadius: 5,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              component="img"
              image={erpSrc}
              title="ERP"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Typography variant="h5" className="fw-b">
                شركة الأرضية المبتكرة
              </Typography>
              <Typography color="GrayText" variant="body1">
                تسجيل الدخول
              </Typography>
            </CardContent>
            <CardContent>
              <Grid item>
                <Box>
                  <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    width="100%"
                    gap={1.5}
                    onSubmit={() => {
                      if (selectedSignOpt === 'Admin') {
                        userLoginHandler('admin@if.co', userPassText);
                      } else userLoginHandler(userNameText, userPassText);
                    }}
                  >
                    <Box
                      display="flex"
                      gap={1}
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        title="اضغط لتحديد طريقة تسجيل الدخول"
                        endIcon={<ArrowDropDownIcon />}
                        onClick={SignOptsDialogOpen}
                        color="secondary"
                        className="fw-m"
                        fullWidth
                        size="large"
                        sx={{
                          paddingLeft: 0,
                          paddingY: 1.5,
                          borderRadius: 1000,
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box display="flex" gap={1}>
                          {selectedSignOpt === 'Admin' ? (
                            <AdminPanelSettingsIcon />
                          ) : (
                            <PersonIcon />
                          )}
                          <Typography variant="body1" className="fw-m">
                            {selectedSignOpt === 'Admin' ? 'أدمن' : 'مستخدم'}
                          </Typography>
                        </Box>
                      </Button>
                    </Box>
                    {/* USERNAME TEXTINPUT =================== */}
                    {selectedSignOpt === 'Admin' ? null : (
                      <FormControl
                        fullWidth
                        variant="filled"
                        hiddenLabel
                        required
                      >
                        <FilledInput
                          disableUnderline
                          sx={{ borderRadius: 1000 }}
                          startAdornment={
                            <InputAdornment position="start">
                              <PersonIcon color="secondary" fontSize="small" />
                            </InputAdornment>
                          }
                          ref={userNameRef}
                          value={userNameText}
                          onChange={(e) => setUserNameText(e.target.value)}
                          dir="ltr"
                          title="إسم المستخدم"
                          placeholder="username"
                          autoFocus
                          endAdornment={
                            <InputAdornment position="end">
                              <Chip
                                label={`${
                                  userNameText.length < 2 ? '**' : userNameText
                                }@if.co`}
                              />
                              {userNameText && (
                                <IconButton
                                  tabIndex={-1}
                                  disableFocusRipple
                                  title="مسح الحقل"
                                  color="secondary"
                                  onClick={() => setUserNameText('')}
                                >
                                  <CancelRounded fontSize="small" />
                                </IconButton>
                              )}
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    )}
                    {/* USERNAME TEXTINPUT =================== */}

                    {/* PASSWORD TEXTINPUT =================== */}
                    <FormControl
                      fullWidth
                      variant="filled"
                      hiddenLabel
                      required
                    >
                      <FilledInput
                        disableUnderline
                        sx={{ borderRadius: 1000 }}
                        startAdornment={
                          <InputAdornment position="start">
                            <LockIcon color="secondary" fontSize="small" />
                          </InputAdornment>
                        }
                        ref={userPassRef}
                        value={userPassText}
                        onChange={(e) => setUserPassText(e.target.value)}
                        dir="ltr"
                        title="الرمز السري"
                        placeholder="password"
                        type={showPass ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              tabIndex={-1}
                              disableFocusRipple
                              color="secondary"
                              onClick={() => setShowPass(!showPass)}
                              title={showPass ? 'اخفاء' : 'اظهار'}
                            >
                              {showPass ? (
                                <VisibilityIcon fontSize="small" />
                              ) : (
                                <VisibilityOffIcon fontSize="small" />
                              )}
                            </IconButton>
                            {userPassText && (
                              <>
                                <Typography>|</Typography>
                                <IconButton
                                  tabIndex={-1}
                                  disableFocusRipple
                                  title="مسح الحقل"
                                  color="secondary"
                                  onClick={() => setUserPassText('')}
                                >
                                  <CancelRounded fontSize="small" />
                                </IconButton>
                              </>
                            )}
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {/* PASSWORD TEXTINPUT =================== */}

                    {selectedSignOpt === 'Admin' ? null : (
                      <FormControlLabel
                        sx={{ m: 0 }}
                        onClick={() => setKeepLoggedin(!keepLoggedin)}
                        control={<Switch value={keepLoggedin} />}
                        title="حفظ اسم المستخدم للدخول السريع"
                        label="تذكرني"
                      />
                    )}
                    {!loading ? (
                      <Button
                        variant="contained"
                        title="دخول الى الحساب"
                        className="fw-b"
                        size="large"
                        type="submit"
                        fullWidth
                        sx={{
                          borderRadius: 1000,
                        }}
                        disabled={
                          selectedSignOpt === 'Admin'
                            ? validateLogInFormSubmit(
                                'admin@if.co',
                                userPassText,
                              )
                            : validateLogInFormSubmit(
                                userNameText,
                                userPassText,
                              )
                        }
                      >
                        <Typography variant="h6" className="fw-b">
                          دخول
                        </Typography>
                      </Button>
                    ) : (
                      <CircularProgress color="inherit" />
                    )}
                  </Box>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <SigninOptions
        selectedValue={selectedSignOpt}
        open={signOptsDialog}
        onClose={SignOptsDialogClose}
        options={signOptsArr}
        clearUserData={setUserNameText}
        clearPassData={setUserPassText}
      />
    </Container>
  );
}

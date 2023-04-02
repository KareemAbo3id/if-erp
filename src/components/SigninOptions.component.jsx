/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { grey } from '@mui/material/colors';
import { DialogTitle } from '@mui/material';

export default function SigninOptions(props) {
  const {
    onClose,
    selectedValue,
    open,
    options,
    clearUserData,
    clearPassData,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    clearUserData('');
    clearPassData('');
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontSize: 16 }} color="GrayText" className="fw-m">
        خيارات تسجيل الدخول
      </DialogTitle>
      <List sx={{ pt: 0, bgcolor: 'ButtonFace' }} disablePadding>
        {options.map((index) => (
          <ListItem key={index} disableGutters disablePadding>
            <ListItemButton
              divider
              onClick={() => handleListItemClick(index)}
              key={index}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: grey[300] }}>
                  {index === 'Admin' ? (
                    <AdminPanelSettingsIcon color="secondary" />
                  ) : (
                    <PersonIcon color="secondary" />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ textAlign: 'right' }}
                primary={index === 'Admin' ? 'أدمن' : 'مستخدم'}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SigninOptions.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  clearUserData: PropTypes.func.isRequired,
  clearPassData: PropTypes.func.isRequired,
};

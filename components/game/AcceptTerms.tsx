import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Router from 'next/router';

export default function AcceptTerms() {
  const [open, setOpen] = React.useState(true);

  const handleDecline = () => {
    setOpen(false);
    Router.push('/', '/', { shallow: true });
  };

  const handleAccept = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDecline}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Viktig information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Just nu så går det att öva på hur substantiv böjs, dock 
            så är semantiken inte den bästa.

            Detta är en beta version och orden dyker upp automatiskt från
            vår ord data, detta betyder att konstiga meningar kan förekomma, detta är inte 
            med flit, kontakta gärna oss via textguiden@hotmail.com så får vi kika på det.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDecline} color="primary">
            Då vill jag inte
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            Okej, jag provar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
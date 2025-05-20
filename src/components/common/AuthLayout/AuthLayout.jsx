import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from '../IconBtn/IconBtn';
import AuthFooter from '../AuthFooter/AuthFooter';
import AuthHeader from "../AuthHeader/AuthHeader"
import Errors from '../SnackbarProvider/SnackbarProvider';
import ArrowIcon from "../../../images/ArrowIcon";
import { useNavigationHelpers } from "../../../hooks/useBackButton";

import s from './AuthLayout.module.scss';

const AuthLayout = ({ title, desc, question, link, linkText, children, errorMessage}) => {
  const { goBack } = useNavigationHelpers();

  return (
    <div className={s.root}>
      <IconBtn Icon={ArrowIcon} onClick={goBack} colorOnHover="#007b00" size={24}/>
      <div className={s.content}>
      <AuthHeader title={title} desc={desc} />
      <div className={s.form}>{children}</div>
      <AuthFooter question={question} link={link} linkText={linkText} />
      </div>
     {errorMessage && <Errors text={errorMessage}/>} 
    </div>
  );
};
  
AuthLayout.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    question: PropTypes.string,
    desc: PropTypes.string
};

export default React.memo(AuthLayout);

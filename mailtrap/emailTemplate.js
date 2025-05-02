export const verificationEmailTemplage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      margin: auto;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
    .footer {
      font-size: 12px;
      color: #888;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hello {{name}},</h2>
    <p>Thank you for signing up. Please verify your email address to complete your registration.</p>
    
    <a href="{{verification_link}}" class="btn">Verify Email</a>
    <h3>{verificationCode}</h3>
    
    <p>If you did not create this account, you can safely ignore this email.</p>
    
    <div class="footer">
      &copy; {{year}} Your Company Name. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const passwordResetRequestTemplage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f2f4f6;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    h2 {
      color: #333333;
    }
    p {
      color: #555555;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #e63946;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #888888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>Password Reset Request</h2>
    <p>Hello {{name}},</p>
    <p>We received a request to reset your password. If you made this request, please click the button below to reset your password:</p>

    <a href="{{reset_link}}" class="btn">Reset Password</a>

    <p>If you did not request a password reset, you can safely ignore this email—your password will not be changed.</p>

    <p>This link will expire in {{expiration_time}}.</p>

    <div class="footer">
      &copy; {{year}} Your Company Name. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const passwordResetSuccessTemplage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Successfully Reset</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f2f4f6;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    h2 {
      color: #2d3436;
    }
    p {
      color: #636e72;
      line-height: 1.6;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #b2bec3;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>Password Successfully Reset</h2>
    <p>Hello {{name}},</p>
    <p>This is a confirmation that your password was successfully changed.</p>
    <p>If you did not make this change, please contact our support team immediately or reset your password again.</p>
    <p>Thank you for keeping your account secure!</p>

    <div class="footer">
      &copy; {{year}} Your Company Name. All rights reserved.
    </div>
  </div>
</body>
</html>
`
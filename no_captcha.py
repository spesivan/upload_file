#!/usr/bin/python
# app/services/solvers/no_captcha.py


"""
@author: Maxime Dréan.

Github: https://github.com/maximedrn
Telegram: https://t.me/maximedrn

Copyright © 2022 Maxime Dréan. All rights reserved.
Any distribution, modification or commercial use is strictly prohibited.
"""


# Python internal imports.
from ...utils.colors import RED, RESET

# Python default imports.
from os.path import abspath
from requests import post
from json import loads


class NoCaptcha:
    """Solve reCAPTCHAs using 2Captcha API."""

    def __init__(self) -> None:
        """Init the solver and ask for the key."""
        while True:
            key = input('\nWhat is your licence key? ')
            result = loads(post(  # Send private key.
                'https://api.gumroad.com/v2/licenses/verify?product_'
                f'permalink=opensea-no-recaptcha&license_key={key}').text)
            if result['success']:
                break  # Success.
            print(f'{RED}{result["message"]}{RESET}')

    def solve(self, web: object) -> bool:
        """Solve the reCAPTCHA."""
        callback = web.driver.execute_script(open(abspath(
            'app/services/solvers/recaptcha_callback.js'),
                 'r', encoding='utf-8')  # Javascript callback.
            .read() + 'return recaptchaCallback();')
        try:  # Use the exploit.
            web.driver.execute_script(f'{callback}();')
        except Exception:
            pass  # Continue.
        return True  # Success.

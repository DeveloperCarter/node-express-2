BUG 1: token was being passed as "token": token when it was supposed to be gotten as "_token": token
BUG 2: /login route allows anyone to login in as anything
BUG 3: _token missing in tests
BUG 4: no error raised if !token in authUser in auth.js
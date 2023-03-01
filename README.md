# Ballot Box

## Overview

Bringing the process of voting to an electronic format to eliminate the old method of paper ballots.

<img src="/imgs/ballotHome.png" alt="homepage"/>

## _Features_

1. Create new candidates
2. Edit candidate information
3. Login and register as an admin
4. View All candidates
5. Submit your vote (limited to one vote per user)
6. View one specific candidate
7. View the tally of each candidate to see who is winning. 

## Back-end: MongoDB

### Code Sample
``` loginAdmin:async (req, res)=> {
      const adminInDB = await Admin.findOne({email:req.body.email})
      if(!adminInDB) {
          res.status(400).json({error: "Invalid email/password combination"})
      }
      try {
          const isPasswordValid = await bcrypt.compare(req.body.password, adminInDB.password)
          console.log(isPasswordValid)
          if(!isPasswordValid) {
              res.status(400).json({error: "Invalid email/password combination"})
          }else {
              // const adminToken = jwt.sign({_id: adminInDB._id, email:adminInDB.email}, SECRET)
              res.status(201).cookie('adminToken',{httpOnly:true, 
                  expires: new Date(Date.now() + 90000)}).json({successMessage: 'User logged in',
                   adminInDB: adminInDB})
          }
      }catch(err) {
          res.status(400).json({error: "Invalid email/password combination"})
      }
  },
  ```

## Running the Project

```
git clone https://github.com/rachel-l-sanchez/votingApp.git
npm start
node server.js
```
_OR_

Navigate to the deployed application [http://100.26.160.109/](http://100.26.160.109/)

## Collaborators
1. Angela Bereski
2. Rachel Howell
3. Ashley Chase
4. Tyler Vanderboegh
5. Rachel Sanchez





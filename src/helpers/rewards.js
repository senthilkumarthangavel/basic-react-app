'use strict';
const moment = require('moment');
const models = require('../../server/models');
const CustomerRewards = models.models.ss16CustomerRewards; 
const Customer = models.models.ss16Customer; 

module.exports = { 
 
        _insertReward : function (reward_data) {
        try {
                                 CustomerRewards.create(reward_data).then(function(user){ 
                                             return user;
                                  }); 


        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
        updateReward : function (reward_data,customerKey) {
        try {
                                  const query = {};
                                  query.customerKey = customerKey;                                                        
                                 Customer.find({ where: query, raw: true }).then( user =>{
                                  console.log("user 1111111111", user , customerKey);
                            let sum = Number(user.rewards) + Number(reward_data);
                               let rewards_data_set = {
                                            rewards: sum
                                            };
                                    Customer.update(rewards_data_set, { where : query, raw: true}).then(function(user){
                                                return user;
                                                });
                         });


        } catch (e) {
            console.log(e.message);
            return null;
        }
    }, 
            downgradeReward : function (reward_data,customerKey) {
        try {
                                  const query = {};
                                  query.customerKey = customerKey;                                                        
                                 Customer.find({ where: query, raw: true }).then( user =>{
                                  console.log("user 1111111111", user , customerKey);
                            let diff = Number(user.rewards) - Number(reward_data);
                               let rewards_data_set = {
                                            rewards: diff
                                            };
                                    Customer.update(rewards_data_set, { where : query, raw: true}).then(function(user){
                                                return user;
                                                });
                         });


        } catch (e) {
            console.log(e.message);
            return null;
        }
    }, 
    updateWallet : function (wallet_data,customerKey) {
        try {
                                  const query = {};
                                  query.customerKey = customerKey;                                                        
                                 Customer.find({ where: query, raw: true }).then( user =>{

console.log("user 222222222222", user , customerKey);
                            let sum = Number(user.wallet) + Number(wallet_data);
                               let wallet_data_set = {
                                            wallet: sum
                                            };
                                    Customer.update(wallet_data_set, { where : query, raw: true}).then(function(user){
                                                return user;
                                                });
                         });


        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

};

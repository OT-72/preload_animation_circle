export default {
    "data": {
      "items": [
        {
          "itemId": "i-1605404824079-3",
          "state": "released",
          "id": 998,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605404824079-3",
            "ItemInstanceId": "ABBF2FF0EB3B51F0",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "03 - System Check",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Message": {
                  "title": "System Check",
                  "display": "false",
                  "effect": "anim1",
                  "action_type": "automatic"
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-03.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 30
            }
          ]
        },
        {
          "itemId": "i-1605404825211-137",
          "state": "released",
          "id": 999,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605404825211-137",
            "ItemInstanceId": "F9F5125092291D5",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "02 - Language",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Choice": {
                  "title": [
                    "Choose your language",
                    "Choisissez votre langue"
                  ],
                  "display": "rotate",
                  "action_type": "manual",
                  "answer": [
                    {
                      "field": "FranĂ§ais",
                      "key": "lang",
                      "value": "fr"
                    },
                    {
                      "field": "English",
                      "key": "lang",
                      "value": "en"
                    }
                  ]
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-02.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 20
            }
          ]
        },
        {
          "itemId": "i-1605405829588-500",
          "state": "released",
          "id": 1001,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605405829588-500",
            "ItemInstanceId": "CC498758980A0E93",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "07 - Thank You",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Message": {
                  "title": "Thank You",
                  "display": "true",
                  "action": "Click to join the event!",
                  "action_type": "manual"
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-08.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 70
            }
          ]
        },
        {
          "itemId": "i-1605404823106-854",
          "state": "released",
          "id": 997,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605404823106-854",
            "ItemInstanceId": "51BEE91C9166B9B3",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "05 - Favorite Song",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Input": {
                  "title": "What is your favorite song from that band?",
                  "display": "true",
                  "action": "Submit",
                  "action_type": "manual",
                  "answer": [
                    {
                      "length": "256",
                      "key": "music_song",
                      "value": "string"
                    }
                  ]
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-06.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 50
            }
          ]
        },
        {
          "itemId": "i-1605403544422-441",
          "state": "released",
          "id": 995,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605403544422-441",
            "ItemInstanceId": "D73363269059BB0F",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "01 - Welcome",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Message": {
                  "title": "Welcome",
                  "display": "true",
                  "action_type": "automatic"
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-01.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 10
            }
          ]
        },
        {
          "itemId": "i-1605405791738-354",
          "state": "released",
          "id": 1000,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605405791738-354",
            "ItemInstanceId": "20A065813A34E897",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "06 - Missing",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Choice": {
                  "title": "What do you miss the most?",
                  "display": "true",
                  "action_type": "manual",
                  "answer": [
                    {
                      "field": "Office",
                      "key": "missing",
                      "value": "office"
                    },
                    {
                      "field": "People",
                      "key": "missing",
                      "value": "people"
                    },
                    {
                      "field": "Plant",
                      "key": "missing",
                      "value": "Plant"
                    }
                  ]
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-07.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 60
            }
          ]
        },
        {
          "itemId": "i-1605404821534-453",
          "state": "released",
          "id": 996,
          "type": {
            "title": "Setup",
            "id": 133,
            "layoutColor": "default",
            "layoutIcon": "default",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1605404821534-453",
            "ItemInstanceId": "E875C228DD2E2CC0",
            "ItemClass": "Setup",
            "CatalogVersion": "1",
            "DisplayName": "04 - Favorite Band",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": [
            {
              "dataKey": "Data",
              "dataVal": {
                "Type_Input": {
                  "title": "What is your favorite band?",
                  "display": "true",
                  "action": "Submit",
                  "action_type": "manual",
                  "answer": [
                    {
                      "lenght": "256",
                      "key": "music_band",
                      "value": "string"
                    }
                  ]
                }
              }
            },
            {
              "dataKey": "Voice",
              "dataVal": "https://genetec-as.s3.amazonaws.com/audio/Segment-05.mp3"
            },
            {
              "dataKey": "Order",
              "dataVal": 40
            }
          ]
        },
        {
          "itemId": "i-1604953010662-98",
          "state": "released",
          "id": 991,
          "type": {
            "title": "Token",
            "id": 132,
            "layoutColor": "default",
            "layoutIcon": "shield",
            "classType": "Default"
          },
          "playfab": {
            "ItemId": "i-1604953010662-98",
            "ItemInstanceId": "2520F75F32367BF9",
            "ItemClass": "Token",
            "CatalogVersion": "1",
            "DisplayName": "Account Created",
            "VirtualCurrencyPrices": null,
            "Tags": [],
            "Consumable": {
              "UsageCount": 1
            },
            "CanBecomeCharacter": false,
            "IsStackable": true,
            "IsTradable": false,
            "IsLimitedEdition": false,
            "InitialLimitedEditionCount": 0,
            "Bundle": null,
            "Container": null,
            "InstanceData": null,
            "RemainingUses": 1,
            "Expiration": null
          },
          "data": []
        }
      ]
    },
    "params": []
  }
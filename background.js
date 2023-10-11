chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === "openSettings") {
        var width = 800;
        var height = 600;

        chrome.windows.getCurrent(function (activeWindow) {
            var left = Math.round(activeWindow.left + (activeWindow.width / 2) - (width / 2));
            var top = Math.round(activeWindow.top + (activeWindow.height / 2) - (height / 2));

            chrome.windows.create({
                url: chrome.runtime.getURL("settingsPopup.html"),
                type: "popup",
                width: width,
                height: height,
                left: left,
                top: top
            });
        });
    }
});

function updateDataAndRules(data) {
    console.log("Data received:", data);
    if (!data) return;

    const ruleIdsToRemove = Array.from({ length: 32 }, (_, i) => i + 1);

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ruleIdsToRemove,
        addRules: [
            {
                "id": 1,
                "priority": 1,
                "condition": {
                    "regexFilter": "Berserk\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.berserk === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.berserk
                    }
                }
            },
            {
                "id": 2,
                "priority": 1,
                "condition": {
                    "regexFilter": "Capture\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.capture === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.capture
                    }
                }
            },
            {
                "id": 3,
                "priority": 1,
                "condition": {
                    "regexFilter": "Check\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.check === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.check
                    }
                }
            },
            {
                "id": 4,
                "priority": 1,
                "condition": {
                    "regexFilter": "Confirmation\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.confirmation === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.confirmation
                    }
                }
            },
            {
                "id": 5,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown0\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown0 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown0
                    }
                }
            },
            {
                "id": 6,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown1\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown1 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown1
                    }
                }
            },
            {
                "id": 7,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown2\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown2 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown2
                    }
                }
            },
            {
                "id": 8,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown3\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown3 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown3
                    }
                }
            },
            {
                "id": 9,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown4\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown4 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown4
                    }
                }
            },
            {
                "id": 10,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown5\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown5 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown5
                    }
                }
            },
            {
                "id": 11,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown6\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown6 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown6
                    }
                }
            },
            {
                "id": 12,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown7\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown7 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown7
                    }
                }
            },
            {
                "id": 13,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown8\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown8 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown8
                    }
                }
            },
            {
                "id": 14,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown9\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown9 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown9
                    }
                }
            },
            {
                "id": 15,
                "priority": 1,
                "condition": {
                    "regexFilter": "CountDown10\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.countDown10 === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.countDown10
                    }
                }
            },
            {
                "id": 16,
                "priority": 1,
                "condition": {
                    "regexFilter": "Defeat\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.defeat === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.defeat
                    }
                }
            },
            {
                "id": 17,
                "priority": 1,
                "condition": {
                    "regexFilter": "Draw\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.draw === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.draw
                    }
                }
            },
            {
                "id": 18,
                "priority": 1,
                "condition": {
                    "regexFilter": "Error\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.error === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.error
                    }
                }
            },
            {
                "id": 19,
                "priority": 1,
                "condition": {
                    "regexFilter": "Explosion\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.explosion === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.explosion
                    }
                },
            },
            {
                "id": 20,
                "priority": 1,
                "condition": {
                    "regexFilter": "GenericNotify\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.genericNotify === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.genericNotify
                    }
                }
            },
            {
                "id": 21,
                "priority": 1,
                "condition": {
                    "regexFilter": "LowTime\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.lowTime === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.lowTime
                    }
                }
            },
            {
                "id": 22,
                "priority": 1,
                "condition": {
                    "regexFilter": "Move\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.move === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.move
                    }
                }
            },
            {
                "id": 23,
                "priority": 1,
                "condition": {
                    "regexFilter": "NewChallenge\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.newChallenge === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.newChallenge
                    }
                }
            },
            {
                "id": 24,
                "priority": 1,
                "condition": {
                    "regexFilter": "NewPM\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.newPM === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.newPM
                    }
                }
            },
            {
                "id": 25,
                "priority": 1,
                "condition": {
                    "regexFilter": "OutOfBound\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.outOfBound === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.outOfBound
                    }
                }
            },
            {
                "id": 26,
                "priority": 1,
                "condition": {
                    "regexFilter": "Select\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.select === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.select
                    }
                }
            },
            {
                "id": 27,
                "priority": 1,
                "condition": {
                    "regexFilter": "SocialNotify\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.socialNotify === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.socialNotify
                    }
                }
            },
            {
                "id": 28,
                "priority": 1,
                "condition": {
                    "regexFilter": "Tournament1st\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.tournament1st === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.tournament1st
                    }
                }
            },
            {
                "id": 29,
                "priority": 1,
                "condition": {
                    "regexFilter": "Tournament2nd\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.tournament2nd === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.tournament2nd
                    }
                }
            },
            {
                "id": 30,
                "priority": 1,
                "condition": {
                    "regexFilter": "Tournament3rd\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.tournament3rd === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.tournament3rd
                    }
                }
            },
            {
                "id": 31,
                "priority": 1,
                "condition": {
                    "regexFilter": "TournamentOther\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.tournamentOther === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.tournamentOther
                    }
                }
            },
            {
                "id": 32,
                "priority": 1,
                "condition": {
                    "regexFilter": "Victory\.(ogg|mp3)",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": data.victory === "data:" ? "allow" : "redirect",
                    "redirect": {
                        "url": data.victory
                    }
                }
            }
        ],
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const data = request.data;

    chrome.storage.local.set({ data }, () => {
        console.log('Data saved');
        updateDataAndRules(data);
        sendResponse('Data received and saved');
    });

    return true;
});

chrome.storage.local.get('data', ({ data }) => {
    console.log("Stored data:", data);
    updateDataAndRules(data);
});

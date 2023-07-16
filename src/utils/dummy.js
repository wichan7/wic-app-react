const dialog = {
    dialogId: "7ac90665-2035-4957-8f46-dd96c123f72a",
    name: "testchatbot",
    dialogs: [
        {
            id: "preDialog",
            name: "preDialog",
            then: []
        }, {
            id: "postDialog",
            name: "postDialog",
            then: []
        }, {
            id: "mainDialog",
            name: "mainDialog",
            then: [
                "welcome",
                "o1",
                "s2",
                "anything-else"
            ],
            nodes: [
                {
                    nodeId: "welcome",
                    type: "welcome",
                    label: "welcome",
                    then: [
                        "output-welcome"
                    ]
                }, {
                    nodeId: "output-welcome",
                    type: "output",
                    label: "output-welcome",
                    then: []
                }, {
                    nodeId: "o1",
                    type: "output",
                    label: "o1",
                    then: []
                }, {
                    nodeId: "s2",
                    type: "set",
                    label: "s2",
                    then: [
                        "o2"
                    ]
                }, {
                    nodeId: "o2",
                    type: "output",
                    label: "o2",
                    then: []
                }, {
                    nodeId: "anything-else",
                    type: "anything-else",
                    label: "anything-else",
                    then: [
                        "anything-output"
                    ]
                }, {
                    nodeId: "anything-output",
                    type: "output",
                    label: "anything-output",
                    then: []
                }
            ]
        }
    ]
};

export default dialog;
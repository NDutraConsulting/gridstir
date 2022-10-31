# CI/CD and TTD Testing Architecture

## Outline the testing Architecture design

* [ ] MVVM Testing layers: (Model - View - ViewModel) -> Chosen for TDD. 
    * Models connect to external resources and can be developed in parrellel to the view and view-model
    * View-Models contain business logic that can benifit from unit testing these can be developed in parrellel to the view and model
    * Views contain layout and design logic that can be static or dynamic in nature. These can be developed and tested with mock-data and should only consume view-model inputs.

* [ ] Integration testing starts with the Product Owner, QA, and Developer.\
        (Automated integration testing built by the QA-test engineer and backend developer using an OpenAPI spec approach)
    * Integration testing is used to validate the assumptions made about the backend by the model and view-model.  Automation testing on the front-end improves deployment cycles and prevents the end-user from seeeing common production integration bugs.
        * This requires SuperTest. [Learn more about endpoint-testing](https://zellwk.com/blog/endpoint-testing/) - [Additional Resource](https://circleci.com/blog/api-testing-with-jest/)

* [ ] Hands on end-to-end QA and User Acceptance testing
    * End-to-End user acceptance testing with QA catches unforseen problems.
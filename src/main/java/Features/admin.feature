Feature: admin page

  Scenario Outline: add a new user
    Given user is on login page
    When title of the page is OrangeHRM
    Then user enter "<username>" and "<password>"
    Then user clicks login button
    Then user is on homePage
    Then user click on admin tab
    Then user clicks add button
    Then user enters details "<employeeName>" and "<user>" and "<code>" and "<confirmPassword>"
    Then quit the browser

    Examples:
      | username | password | employeeName     | user      | code         | confirmPassword |
      | Admin    | admin123 | Jacqueline White | qatester  | Windows2010. | Windows2010.    |
      | Admin    | admin123 | Ananya Dash      | qatester1 | Windows2010. | Windows2010.    |
      | Admin    | admin123 | Charlie Carter   | qatester2 | Windows2010. | Windows2010.    |
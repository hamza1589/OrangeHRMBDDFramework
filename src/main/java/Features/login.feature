Feature: OrangeHRM Login feature

  #Scenario: OrangeHRM login Test Scenario

    #Given user is already on login page
    #When title of login page is OrangeHRM
    #Then user enters "Admin" and "admin123"
    #Then user clicks on login button
    #Then user is on home page


  Scenario Outline: OrangeHRM login Test Scenario

    Given user is already on login page
    When title of login page is OrangeHRM
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then user is on home page
    Then close the browser

    Examples:
      | username | password |
      | Admin    | admin123 |
      | hamza    | pass123  |
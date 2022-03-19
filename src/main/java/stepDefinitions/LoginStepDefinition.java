package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginStepDefinition {
    WebDriver driver;

    //    @Given("^user is already on login page$")
//    public void user_already_on_login_page(){
//
//    }
    @Given("^user is already on login page$")
    public void user_is_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "C://Users//hamza//Downloads//Selenium-standalone//chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://opensource-demo.orangehrmlive.com/");

    }

    @When("^title of login page is OrangeHRM$")
    public void title_of_login_page_is_OrangeHRM() {
        String title = driver.getTitle();
        Assert.assertEquals(title, "OrangeHRM");

    }

    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String username, String password)  {
        driver.findElement(By.id("txtUsername")).sendKeys(username);
        driver.findElement(By.id("txtPassword")).sendKeys(password);



    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        driver.findElement(By.xpath("//input[@id='btnLogin']")).click();

    }

    @Then("^user is on home page$")
    public void user_is_on_home_page() {
        String title = driver.getTitle();
        Assert.assertEquals(title, "OrangeHRM");

    }
    @Then("^close the browser$")
    public void close_the_browser()  {
        driver.quit();
    }



}

package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AdminDefinition {
    WebDriver driver;

    @Given("^user is on login page$")
    public void user_is_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "C://Users//hamza//Downloads//Selenium-standalone//chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @When("^title of the page is OrangeHRM$")
    public void title_of_the_page_is_OrangeHRM() {
        String title = driver.getTitle();
        Assert.assertEquals(title, "OrangeHRM");
    }

    @Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and(String username, String password) {
        driver.findElement(By.id("txtUsername")).sendKeys(username);
        driver.findElement(By.id("txtPassword")).sendKeys(password);
    }

    @Then("^user clicks login button$")
    public void user_clicks_login_button() {
        driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
    }

    @Then("^user is on homePage$")
    public void user_is_on_homePage() {
        String title = driver.getTitle();
        Assert.assertEquals(title, "OrangeHRM");

    }

    @Then("^user click on admin tab$")
    public void user_click_on_admin_tab() {
        driver.findElement(By.xpath("//a[@id='menu_admin_viewAdminModule']")).click();

    }

    @Then("^user clicks add button$")
    public void user_clicks_add_button() {
        driver.findElement(By.xpath("//input[@id='btnAdd']")).click();


    }

    @Then("^user enters details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_details_and_and_and(String employeeName, String user, String code, String confirmPassword) {
        driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys(employeeName);
        driver.findElement(By.id("systemUser_userName")).sendKeys(user);
        driver.findElement(By.id("systemUser_password")).sendKeys(code);
        driver.findElement(By.id("systemUser_confirmPassword")).sendKeys(confirmPassword);
    }

    @Then("^quit the browser$")
    public void quit_the_browser() {
        driver.quit();

    }


}

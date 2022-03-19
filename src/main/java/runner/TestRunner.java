package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\hamza\\OrangeHRMBDDFramework\\src\\main\\java\\Features\\admin.feature"
        ,glue = {"stepDefinitions"},
        format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
        dryRun = false,
        monochrome = true,
        strict = true



)
public class TestRunner {
}

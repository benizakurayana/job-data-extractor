chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'extractData') {
    const breadcrumbItems = $('.breadcrumb-list__item');

      const company = breadcrumbItems.eq(1).find('a').text();
      const companyLink = breadcrumbItems.eq(1).find('a').attr('href');
      const jobTitle = breadcrumbItems.eq(2).find('span').attr('title');
      const dateUpdated = $('.job-header__title span[title]').attr('title');

      const jobDescription = $('p.job-description__content').text();
      
      const extractedData = {
        jobTitle: jobTitle,
        company: company,
        companyLink: companyLink,
        dateUpdated: dateUpdated,
        jobDescription: jobDescription
      };

      console.log(extractedData);
    
  }
});

describe('joggingAPIService', function () {

  getParameterByName = function(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(url);

    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  var hydraService, $httpBackend, $timeout;

  beforeEach(function() {
      module('joggingAPIService');

    inject(function($injector) {
      hydraService = $injector.get('$hydraService');
      $httpBackend = $injector.get('$httpBackend');
      $timeout = $injector.get('$timeout');
    });

    jasmine.Clock.useMock();
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('getDivisionsByPostal', function() {

    xit('should attempt to make JSONP request', function() {
      $httpBackend.expectJSONP(/*.\.jsonp.*/).respond(
        200,
        '',
        {}
      );
  
      hydraService.getDivisionsByPostal('84058');
  
      $httpBackend.flush();
      $timeout.flush();
    });
  
    xit('should attempt to make JSONP request with correct postal in it', function() {
      $httpBackend.expectJSONP(/*.\.jsonp.*/).respond(function(method, url, data, headers) {
        expect(url).toContain('84058');
  
        return [200, '', {}];
      });
  
      hydraService.getDivisionsByPostal('84058');
  
      $httpBackend.flush();
      $timeout.flush();
    });
  
    xit('should increment transactionId between requests', function() {
      var transactionId = null;
  
      $httpBackend.whenJSONP(/*.\.jsonp.*/).respond(function(method, url, data, headers) {
        var r = JSON.parse(getParameterByName(url, 'r'));
  
        if (transactionId == null)
        {
          transactionId = r.transactionId;
        } else {
          expect(r.transactionId).toBe(transactionId + 1);
        }
  
        return [200, '', {}];
      });
  
      hydraService.getDivisionsByPostal('84058');
  
      $httpBackend.flush();
      $timeout.flush();
  
      hydraService.getDivisionsByPostal('84059');
  
      $httpBackend.flush();
      $timeout.flush();
    });
  
    xit('should build correct data object from normal response', function() {
      $httpBackend.whenJSONP(/*.\.jsonp.*/).respond(
        200,
        //'test({"protocolVer":"0.1","transactionId":3,"responses":[{"responseType":"getAddressVertex","responseVer":"1","cities":[{"city":"Vineyard","state":"UT"},{"city":"Orem","state":"UT"}]}]});',
        '{"protocolVer":"0.1","transactionId":3,"responses":[{"responseType":"getAddressVertex","responseVer":"1","cities":[{"city":"Vineyard","state":"UT"},{"city":"Orem","state":"UT"}]}]}',
        {}
      );
  
      bean = hydraService.getDivisionsByPostal('84058');
  
      $httpBackend.flush();
      $timeout.flush();
  
      expect(bean.data.states).toEqual([
        'UT'
      ]);
  
      expect(bean.data.cities).toEqual([
        'Vineyard',
        'Orem'
      ]);
  
      expect(bean.complete).toBe(true);
  
      expect(bean.error).toBe(null);
    });
  
    // TODO: test that service is always strictly async (immediate result object is not populated with anything)
  
    xit('should build correct data object with incorrect data', function() {
      var bean;

      runs(function() {
        bean = hydraService.getDivisionsByPostal('8405');
      });

      waitsFor(function() {
        $timeout.flush();
        return bean.complete;
      }, '.complete', 1000);
  
      runs(function() {
        expect(bean.data.states).toBe(null);
        expect(bean.data.cities).toBe(null);
        expect(bean.complete).toBe(true);
        expect(bean.error).toBe('INVALID_POSTAL');
      });
    });
  
    // TODO: test for wrong zip and correctly processing the error
    // TODO: test for zip longer looking like dfwf11111ffer not making a request and getting INVALID_POSTAL error
  
    xit('should use cache for same postal', function() {
      $httpBackend.expectJSONP(/*.\.jsonp.*/).respond(
        200,
        //'test({"protocolVer":"0.1","transactionId":3,"responses":[{"responseType":"getAddressVertex","responseVer":"1","cities":[{"city":"Vineyard","state":"UT"},{"city":"Orem","state":"UT"}]}]});',
        '{"protocolVer":"0.1","transactionId":3,"responses":[{"responseType":"getAddressVertex","responseVer":"1","cities":[{"city":"Vineyard","state":"UT"},{"city":"Orem","state":"UT"}]}]}',
        {}
      );
  
      bean = hydraService.getDivisionsByPostal('84058');
  
      $httpBackend.flush();
      $timeout.flush();
  
      expect(bean.data.states).toEqual([
        'UT'
      ]);
  
      expect(bean.data.cities).toEqual([
        'Vineyard',
        'Orem'
      ]);
  
      expect(bean.complete).toBe(true);
  
      expect(bean.error).toBe(null);
  
      runs(function(){
        bean = hydraService.getDivisionsByPostal('84058');
      });
  
      waitsFor(function(){
        $timeout.flush();
        return bean.complete;
      }, ".complete", 1000);

      runs(function(){
        expect(bean.data.states).toEqual([
          'UT'
        ]);
    
        expect(bean.data.cities).toEqual([
          'Vineyard',
          'Orem'
        ]);
    
        expect(bean.complete).toBe(true);
    
        expect(bean.error).toBe(null);
      });
    });
  
    // TODO: test for promise being resolved lastly and complete flag changed just before that after error and data are populated
  });
});
